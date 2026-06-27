#!/usr/bin/env python3
"""
Generate a premium professional CV PDF for Fayez Ahmad Mrouj.
- Visual identity matches the website: Emerald primary + Gold accent + warm neutral text
- Content pulled from the same data sources as the website (CV, courses, journey)
- Single-column ATS-friendly structure with refined visual polish
- Output: /home/z/my-project/public/Fayez-Mrouj-CV.pdf  (replaces the old one)
"""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm, mm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle,
    KeepTogether, PageBreak, Image, Frame, PageTemplate, BaseDocTemplate, NextPageTemplate
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.platypus.flowables import Flowable

# ── Font Registration (Carlito = Calibri-equivalent, close to Inter/Manrope feel) ──
FONT_DIR = "/usr/share/fonts/truetype/english"
pdfmetrics.registerFont(TTFont('Body', f'{FONT_DIR}/Carlito-Regular.ttf'))
pdfmetrics.registerFont(TTFont('Body-Bold', f'{FONT_DIR}/Carlito-Bold.ttf'))
pdfmetrics.registerFont(TTFont('Body-Italic', f'{FONT_DIR}/Carlito-Italic.ttf'))
pdfmetrics.registerFont(TTFont('Body-BoldItalic', f'{FONT_DIR}/Carlito-BoldItalic.ttf'))
registerFontFamily('Body', normal='Body', bold='Body-Bold',
                   italic='Body-Italic', boldItalic='Body-BoldItalic')

# ── Color palette (matches website globals.css) ──
EMERALD = colors.HexColor('#059669')       # primary
EMERALD_DARK = colors.HexColor('#047857')  # primary darker
EMERALD_LIGHT = colors.HexColor('#D1FAE5') # primary light bg
GOLD = colors.HexColor('#D4AF37')          # gold accent
GOLD_LIGHT = colors.HexColor('#FAF5E0')
CHARCOAL = colors.HexColor('#1F2937')      # warm charcoal text
MUTED = colors.HexColor('#6B7280')         # muted text
SOFT = colors.HexColor('#9CA3AF')          # softer muted
LINE = colors.HexColor('#E5E7EB')          # subtle border
BG_SOFT = colors.HexColor('#F9FAFB')       # warm off-white bg

# ── Page setup ──
PAGE_W, PAGE_H = A4
LEFT_MARGIN = 1.6 * cm
RIGHT_MARGIN = 1.6 * cm
TOP_MARGIN = 1.4 * cm
BOTTOM_MARGIN = 1.4 * cm
CONTENT_W = PAGE_W - LEFT_MARGIN - RIGHT_MARGIN

OUTPUT = "/home/z/my-project/public/Fayez-Mrouj-CV.pdf"

# ── Styles ──
name_style = ParagraphStyle(
    'Name', fontName='Body-Bold', fontSize=26, leading=30,
    textColor=CHARCOAL, spaceAfter=2,
)
title_style = ParagraphStyle(
    'Title', fontName='Body', fontSize=12.5, leading=16,
    textColor=EMERALD_DARK, spaceAfter=4,
)
contact_style = ParagraphStyle(
    'Contact', fontName='Body', fontSize=9.5, leading=13,
    textColor=MUTED, spaceAfter=2,
)
section_title_style = ParagraphStyle(
    'SectionTitle', fontName='Body-Bold', fontSize=11.5, leading=14,
    textColor=EMERALD_DARK, spaceBefore=10, spaceAfter=2,
    letterSpacing=1.2,
)
summary_style = ParagraphStyle(
    'Summary', fontName='Body', fontSize=10, leading=15,
    textColor=CHARCOAL, alignment=TA_JUSTIFY, spaceAfter=4,
)
job_title_style = ParagraphStyle(
    'JobTitle', fontName='Body-Bold', fontSize=10.5, leading=14,
    textColor=CHARCOAL, spaceAfter=0,
)
job_meta_style = ParagraphStyle(
    'JobMeta', fontName='Body-Italic', fontSize=9.5, leading=13,
    textColor=MUTED, spaceAfter=2,
)
bullet_style = ParagraphStyle(
    'Bullet', fontName='Body', fontSize=9.5, leading=13.5,
    textColor=CHARCOAL, leftIndent=12, bulletIndent=0,
    spaceBefore=0, spaceAfter=1,
)
body_style = ParagraphStyle(
    'Body', fontName='Body', fontSize=9.5, leading=13.5,
    textColor=CHARCOAL, spaceAfter=2,
)
tag_style = ParagraphStyle(
    'Tag', fontName='Body-Bold', fontSize=9, leading=12,
    textColor=EMERALD_DARK, alignment=TA_CENTER,
)
footer_style = ParagraphStyle(
    'Footer', fontName='Body-Italic', fontSize=8.5, leading=11,
    textColor=SOFT, alignment=TA_CENTER,
)


def section_header(title):
    """Section title + thin emerald rule separator."""
    return [
        Paragraph(title.upper(), section_title_style),
        HRFlowable(width='100%', thickness=1.2, color=EMERALD,
                   spaceBefore=1, spaceAfter=5, lineCap='round'),
    ]


def experience_entry(title, company, dates, location, bullets, current=False):
    """One work experience block."""
    elements = []
    # Use a 2-column table: left = title + company, right = dates + location
    title_html = f'<b>{title}</b>'
    if current:
        title_html += f'  <font color="#D4AF37" size="8"><b>● CURRENT</b></font>'
    meta_html = f'{company}<br/><font color="#9CA3AF">{location}</font>'
    dates_html = f'<para alignment="right"><font color="#059669"><b>{dates}</b></font></para>'

    left_cell = [
        Paragraph(title_html, job_title_style),
        Paragraph(meta_html, job_meta_style),
    ]
    right_cell = [
        Paragraph(dates, ParagraphStyle(
            'DateRight', parent=job_meta_style, alignment=2,  # right
            textColor=EMERALD_DARK, fontName='Body-Bold',
        )),
    ]

    t = Table([[left_cell, right_cell]], colWidths=[CONTENT_W * 0.72, CONTENT_W * 0.28])
    t.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 2))
    for b in bullets:
        elements.append(Paragraph(f'•  {b}', bullet_style))
    elements.append(Spacer(1, 5))
    return elements


def skills_block(categories):
    """Skills as label: value pairs."""
    elements = []
    rows = []
    for cat, vals in categories:
        cell = Paragraph(f'<b><font color="#047857">{cat}:</font></b>  {vals}', body_style)
        rows.append([cell])
    t = Table(rows, colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 1),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 1),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ]))
    elements.append(t)
    return elements


def competency_grid(items, cols=4):
    """Areas of expertise as a colored grid of small cards."""
    # build cells
    cells = []
    for item in items:
        cell = Paragraph(f'<b>{item}</b>', tag_style)
        cells.append(cell)
    # pad to multiple of cols
    while len(cells) % cols != 0:
        cells.append('')

    rows = []
    for i in range(0, len(cells), cols):
        rows.append(cells[i:i + cols])

    col_w = CONTENT_W / cols
    t = Table(rows, colWidths=[col_w] * cols)
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), BG_SOFT),
        ('TEXTCOLOR', (0, 0), (-1, -1), EMERALD_DARK),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 4),
        ('RIGHTPADDING', (0, 0), (-1, -1), 4),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('GRID', (0, 0), (-1, -1), 0.5, EMERALD_LIGHT),
        ('LINEABOVE', (0, 0), (-1, 0), 1.2, EMERALD),
        ('LINEBELOW', (0, -1), (-1, -1), 1.2, EMERALD),
    ]))
    return [t]


def certification_list_by_category(cats):
    """Render certifications grouped by category as compact paragraphs.
    `cats` is a list of (category_name, certs_string) tuples.
    """
    elements = []
    for cat, certs in cats:
        # certs is already a string — render directly with bold category label
        para = Paragraph(
            f'<b><font color="#047857">{cat}:</font></b>  {certs}',
            body_style
        )
        elements.append(para)
        elements.append(Spacer(1, 4))
    return elements


# ── Header (drawn on every page) ──
def draw_page_decoration(canvas, doc):
    """Draw a thin emerald header band + page number footer on every page."""
    canvas.saveState()
    # Top thin band
    canvas.setFillColor(EMERALD)
    canvas.rect(0, PAGE_H - 0.25 * cm, PAGE_W, 0.25 * cm, fill=1, stroke=0)
    # Bottom gold accent line
    canvas.setStrokeColor(GOLD)
    canvas.setLineWidth(1.5)
    canvas.line(LEFT_MARGIN, 0.9 * cm, PAGE_W - RIGHT_MARGIN, 0.9 * cm)
    # Footer text
    canvas.setFont('Body-Italic', 8.5)
    canvas.setFillColor(SOFT)
    footer_text = f"Fayez Ahmad Mrouj  ·  International Physics Educator  ·  Page {doc.page}"
    canvas.drawCentredString(PAGE_W / 2, 0.4 * cm, footer_text)
    canvas.restoreState()


def draw_first_page_decoration(canvas, doc):
    """First page ONLY: full header with portrait + name. Other pages use normal template."""
    # Safety check: only draw portrait on page 1 (in case this template leaks to other pages)
    if doc.page != 1:
        # Fall back to normal decoration
        draw_page_decoration(canvas, doc)
        return

    canvas.saveState()
    # Top emerald band (thicker on first page)
    canvas.setFillColor(EMERALD)
    canvas.rect(0, PAGE_H - 0.5 * cm, PAGE_W, 0.5 * cm, fill=1, stroke=0)
    # Gold thin line under band
    canvas.setFillColor(GOLD)
    canvas.rect(0, PAGE_H - 0.6 * cm, PAGE_W, 0.1 * cm, fill=1, stroke=0)

    # Portrait — circular crop simulation via clipped image
    portrait_path = "/home/z/my-project/public/portrait.jpg"
    if os.path.exists(portrait_path):
        from reportlab.lib.utils import ImageReader
        img = ImageReader(portrait_path)
        iw, ih = img.getSize()
        # Portrait box: top-right corner, 3.0cm square
        psize = 3.0 * cm
        px = PAGE_W - RIGHT_MARGIN - psize
        py = PAGE_H - 1.2 * cm - psize
        # Gold frame
        canvas.setFillColor(GOLD)
        canvas.roundRect(px - 0.1 * cm, py - 0.1 * cm, psize + 0.2 * cm, psize + 0.2 * cm, 6, fill=1, stroke=0)
        # Image (cover-fit)
        canvas.saveState()
        canvas.roundRect(px, py, psize, psize, 4, fill=0, stroke=0)
        p = canvas.beginPath()
        p.roundRect(px, py, psize, psize, 4)
        canvas.clipPath(p, stroke=0, fill=0)
        # cover fit
        scale = max(psize / iw, psize / ih)
        dw = iw * scale
        dh = ih * scale
        canvas.drawImage(img, px - (dw - psize) / 2, py - (dh - psize) / 2, dw, dh, mask='auto')
        canvas.restoreState()

    # Footer
    canvas.setStrokeColor(GOLD)
    canvas.setLineWidth(1.5)
    canvas.line(LEFT_MARGIN, 0.9 * cm, PAGE_W - RIGHT_MARGIN, 0.9 * cm)
    canvas.setFont('Body-Italic', 8.5)
    canvas.setFillColor(SOFT)
    footer_text = f"Fayez Ahmad Mrouj  ·  International Physics Educator  ·  Page {doc.page}"
    canvas.drawCentredString(PAGE_W / 2, 0.4 * cm, footer_text)
    canvas.restoreState()


# ── Content (mirrors src/lib/content.ts) ──
PROFILE = {
    "name": "Fayez Ahmad Mrouj",
    "title": "International Physics Educator",
    "email": "fayez.mrouj@gmail.com",
    "email_alt": "fayez.mrouj@live.com",
    "phone1": "+962 78 8 287 286",
    "phone2": "+962 78 0 084 600",
    "location": "Irbid, Jordan",
    "degree": "B.Sc. in Physics — Yarmouk University, Jordan (1996)",
    "languages": "Arabic (Native) · English (IELTS B2)",
}

SUMMARY = (
    "Physics educator with 28+ years of experience teaching Physics and Science across "
    "secondary and pre-university levels in Jordan and the United Arab Emirates. "
    "Career spans five institutions — Ministry of Education Jordan, MOE UAE, Abu Dhabi "
    "Education Council, Institute of Applied Technology, and Emirates Schools Establishment. "
    "Specialist in student-centred and inquiry-based instruction, with deep, certified "
    "expertise in educational technology, smart learning platforms (Alef, Smart Learning "
    "Gateway), hybrid and distance learning, digital assessment, and the integration of "
    "AI tools — including Prompt Engineering and ChatGPT — into classroom practice. "
    "Completed 100+ professional development courses; most recent in November 2025. "
    "Bilingual in Arabic and English (IELTS Academic, CEFR B2). Seeking an international "
    "Physics teaching role where rigour, technology, and human respect meet."
)

EXPERIENCE = [
    {
        "title": "Physics & Science Teacher",
        "company": "Ministry of Education — Jordan",
        "dates": "Aug 2022 — Present",
        "location": "Irbid, Jordan",
        "bullets": [
            "Returned to Jordan bringing smart-learning, hybrid-teaching, and AI-literacy practices developed across 16 years in the UAE.",
            "Teaches Physics and Science at the secondary level in Jordanian public schools.",
            "Mentors colleagues on educational-technology adoption and AI-integrated lesson design.",
            "Continues active professional development — most recent certifications in November 2025.",
        ],
        "current": True,
    },
    {
        "title": "Physics & Science Teacher",
        "company": "Emirates Schools Establishment (ESE)",
        "dates": "Aug 2015 — Jul 2021",
        "location": "United Arab Emirates",
        "bullets": [
            "Delivered hybrid and distance learning throughout COVID-19 using Microsoft Teams, LMS, and the Alef platform.",
            "Power user of the Alef Platform across inquiry, vocabulary, exam-preparation, and metacognition modules.",
            "Earned 80+ professional development certifications during this period — including Prompt Engineering, ChatGPT in Smart Learning, Advanced Smart Learning (Levels 1 & 2), and Smart Learning Gateway (Basic + Intermediate).",
            "Began integrating AI tools into lesson planning, differentiation, and assessment design.",
        ],
        "current": False,
    },
    {
        "title": "Physics & Science Teacher",
        "company": "Institute of Applied Technology (IAT)",
        "dates": "Sep 2011 — Jul 2012",
        "location": "United Arab Emirates",
        "bullets": [
            "Taught Physics in a STEM-oriented, applied-technology institutional culture.",
            "Connected Physics instruction to engineering and real-world applications.",
            "Strengthened project- and problem-based teaching strategies.",
        ],
        "current": False,
    },
    {
        "title": "Physics & Science Teacher",
        "company": "Abu Dhabi Education Council (ADEC)",
        "dates": "Aug 2009 — Aug 2011",
        "location": "Abu Dhabi, UAE",
        "bullets": [
            "Implemented ADEC's student-centred learning framework during a major pedagogical reform.",
            "Adopted inquiry- and activity-based teaching strategies aligned with national reform goals.",
            "Participated in intensive professional development on modern teaching methodologies.",
        ],
        "current": False,
    },
    {
        "title": "Physics & Science Teacher",
        "company": "Ministry of Education — UAE",
        "dates": "Aug 2004 — Aug 2009",
        "location": "United Arab Emirates",
        "bullets": [
            "Five years teaching in the UAE public school system — first sustained exposure to a multicultural, multilingual student body.",
            "Engaged with early UAE educational reform initiatives.",
            "Delivered bilingual classroom instruction in Arabic and English.",
        ],
        "current": False,
    },
    {
        "title": "Physics & Science Teacher",
        "company": "Ministry of Education — Jordan",
        "dates": "Jan 1996 — Aug 2004",
        "location": "Jordan",
        "bullets": [
            "Eight years teaching Physics and Science in Jordanian public schools — the foundation of my career.",
            "Built lesson-planning, assessment, and classroom-management instincts still in use today.",
            "Mentored new teachers informally as the senior Physics teacher.",
        ],
        "current": False,
    },
]

COMPETENCIES = [
    "Physics Education", "Science Education", "STEM Education",
    "Educational Technology", "Curriculum Planning", "Assessment Design",
    "Classroom Management", "Distance Learning", "Hybrid Learning",
    "Smart Learning", "AI in Education", "Student Mentoring",
]

SKILL_GROUPS = [
    ("Teaching & Pedagogy",
     "Advanced Physics Instruction (Secondary & Pre-University); Simplifying Complex Concepts; Lesson Planning & Curriculum Design; Active Learning & Inquiry Strategies; Differentiated Instruction; Student Engagement"),
    ("Communication",
     "Bilingual Delivery (Arabic / English); Presentation & Public Speaking; Parent–Teacher Communication; Scientific Explanation in Two Languages; Academic Advising"),
    ("Leadership & Collaboration",
     "Teamwork & Professional Collaboration; Influential & Digital Leadership; Mentoring Colleagues; Kaizen — Continuous Improvement"),
    ("Technology",
     "Smart Learning Gateway (LMS); Alef Platform; Microsoft Teams / Distance Learning; Swift Assess; Microsoft Office Suite; Adobe Photoshop; CorelDRAW; Prompt Engineering & ChatGPT in Education"),
    ("Assessment & Evaluation",
     "Question Banks & Test Design; Electronic & Online Assessment; Assessment-for-Learning (AfL); Data-Driven Classroom Decisions"),
    ("Professional Thinking",
     "Analytical & Critical Thinking; Problem Solving; Time Management & Organisation; Adaptability in Multicultural Settings; Self-Motivated Continuous Learning"),
]

TECH_SKILLS = [
    ("Microsoft Office", "Word · PowerPoint · Excel · Teams — daily teaching workflow"),
    ("LMS / Smart Learning Gateway", "Basic + Intermediate certified; daily use"),
    ("Alef Platform", "Power user — inquiry, vocabulary, exam-prep, metacognition"),
    ("ICDL", "International Computer Driving License — certified"),
    ("Adobe Photoshop + CorelDRAW", "Graphic design for instructional materials"),
    ("Educational Technology", "Principles, strategies, and applications — full course certified"),
    ("Digital Assessment", "Swift Assess; electronic exams; online evaluation"),
    ("AI Tools", "Prompt Engineering; ChatGPT for Smart Learning — certified"),
]

CERTIFICATIONS_BY_CAT = [
    ("Language", "IELTS Academic (CEFR B2, Overall Band 5.5)"),
    ("AI in Education", "Prompt Engineering in Artificial Intelligence (2024); ChatGPT in Smart Learning (2023)"),
    ("Smart Learning", "Advanced Smart Learning 1 & 2; Smart Learning Gateway Basic + Intermediate; Practical Applications in Smart Learning; The Teacher's Role in Smart Learning; Communication in Smart Learning"),
    ("Alef Platform", "Using Inquiry with Alef; Teaching Academic Vocabulary with Alef; Successful Exam Preparation with Alef; Enhancing Thinking Skills with Alef; Learning by Doing on Alef"),
    ("Distance Learning", "Implementing Distance Learning; Designing Learning for Distance Learning; Be an Online Tutor in 24 Hours; Online Evaluation of Distance Learning; Tools Used in Distance Learning"),
    ("Hybrid Learning", "Blended Station Teaching; Agile Transition to Hybrid Learning; Teaching Physics in a Hybrid Environment"),
    ("Assessment", "Electronic Assessments; Swift Assess — Designing Electronic Tests; Assessment for Learning; Using Evaluation Effectively; Data-Driven Classroom"),
    ("Pedagogy", "Critical Thinking Skills; Classroom Management Fundamentals; Classroom Management — Irtiqaa; Differentiated Instruction; Design Thinking for Effective Learning; Teaching for Effective Learning; Empowering Students with Future Skills; Scaffolding Strategies"),
    ("Technology", "ICDL; Intel Teach — Education for the Future; Educational Technology — Principles, Strategies & Applications; iPad Classroom Apps for Educators; E-Maturity"),
    ("Leadership", "Digital Leadership; Influential Leadership; Kaizen — Continuous Improvement Methodology"),
    ("Psychology", "Educational Psychology (UNRWA / UNESCO); Emotional Intelligence in Education; Psychosocial Learning"),
    ("Other", "Canadian Teachers Federation — Methods of Teaching Science; Digital Citizenship; Safe Return to Schools; Specialized Science Training (Elite Science c3)"),
]

DIGITAL_PRESENCE = [
    ("Interactive Physics Platform", "https://interactive-physics-platform.vercel.app/",
     "A full interactive learning platform I designed and built for Physics students in Grades 9 and 10 — aligned with the official curriculum. Includes units, lessons, formulas, worked examples, and interactive quizzes."),
    ("Physics & Science YouTube Channel", "https://www.youtube.com/@FayezMrouj",
     "A dedicated channel where I publish Physics and Science explainer videos — making difficult concepts visible, step by step, for students and fellow educators."),
    ("Physics & Math Facebook Page", "https://www.facebook.com/PhyAndMath",
     "A community page dedicated to Physics and Mathematics — sharing bite-size explanations, problem-solving tips, and classroom resources with students, parents, and the wider learning community."),
    ("Personal Portfolio Website", "https://fayez-mrouj-portfolio.vercel.app",
     "This professional portfolio — showcasing 28+ years of teaching experience, certifications, and educational innovation."),
]

# ── Build document ──
doc = BaseDocTemplate(
    OUTPUT, pagesize=A4,
    leftMargin=LEFT_MARGIN, rightMargin=RIGHT_MARGIN,
    topMargin=TOP_MARGIN, bottomMargin=BOTTOM_MARGIN,
    title="Fayez Ahmad Mrouj — CV",
    author="Fayez Ahmad Mrouj",
    subject="International Physics Educator — Curriculum Vitae",
    creator="Fayez Mrouj Portfolio",
)

frame = Frame(LEFT_MARGIN, BOTTOM_MARGIN, CONTENT_W,
              PAGE_H - TOP_MARGIN - BOTTOM_MARGIN - 0.6 * cm,
              id='normal', leftPadding=0, rightPadding=0,
              topPadding=0, bottomPadding=0, showBoundary=0)

doc.addPageTemplates([
    PageTemplate(id='first', frames=[frame], onPage=draw_first_page_decoration),
    PageTemplate(id='normal', frames=[frame], onPage=draw_page_decoration),
])

story = []

# ── HEADER BLOCK (page 1) ──
# Leave room for portrait on the right by constraining name width
name_table = Table([[
    [
        Paragraph(PROFILE["name"], name_style),
        Paragraph(PROFILE["title"], title_style),
        Paragraph(
            f'📍 {PROFILE["location"]}  ·  ✉ {PROFILE["email"]}  ·  ☎ {PROFILE["phone1"]}',
            contact_style
        ),
        Paragraph(
            f'{PROFILE["email_alt"]}  ·  {PROFILE["phone2"]}  ·  {PROFILE["languages"]}',
            contact_style
        ),
    ],
    "",  # spacer for portrait area (portrait drawn by canvas)
]], colWidths=[CONTENT_W - 3.2 * cm, 3.2 * cm])
name_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
]))
story.append(name_table)
story.append(Spacer(1, 4))
story.append(HRFlowable(width='100%', thickness=0.8, color=LINE,
                        spaceBefore=2, spaceAfter=6))

# ── PROFESSIONAL SUMMARY ──
story.extend(section_header('Professional Summary'))
story.append(Paragraph(SUMMARY, summary_style))

# ── CORE COMPETENCIES ──
story.extend(section_header('Core Competencies'))
story.extend(competency_grid(COMPETENCIES, cols=4))
story.append(Spacer(1, 4))

# ── PROFESSIONAL EXPERIENCE ──
story.extend(section_header('Professional Experience'))
for idx, exp in enumerate(EXPERIENCE, 1):
    # KeepTogether each entry so it doesn't break awkwardly
    block = experience_entry(
        exp["title"], exp["company"], exp["dates"], exp["location"],
        exp["bullets"], current=exp["current"]
    )
    story.append(KeepTogether(block))
    # After ESE (entry 2) — switch to normal template so IAT fills remaining page 1
    # space and ADEC + remaining entries flow naturally to page 2 (no portrait there)
    if idx == 2:
        story.append(NextPageTemplate('normal'))

# ── (next sections continue on the same page after experience) ──
story.append(Spacer(1, 8))

# ── EDUCATION ──
story.extend(section_header('Education'))
edu_table = Table([[
    [
        Paragraph(f'<b>Bachelor of Science in Physics</b>', job_title_style),
        Paragraph('Yarmouk University  ·  Irbid, Jordan  ·  1996', job_meta_style),
    ],
    Paragraph('<para alignment="right"><b><font color="#059669">1996</font></b></para>',
              job_meta_style),
]], colWidths=[CONTENT_W * 0.72, CONTENT_W * 0.28])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
]))
story.append(edu_table)
story.append(Spacer(1, 4))

# ── KEY SKILLS ──
story.extend(section_header('Key Skills'))
story.extend(skills_block(SKILL_GROUPS))
story.append(Spacer(1, 4))

# ── TECHNOLOGY SKILLS ──
story.extend(section_header('Technology Skills'))
for name, desc in TECH_SKILLS:
    story.append(Paragraph(
        f'<b><font color="#047857">{name}</font></b>  —  {desc}',
        body_style
    ))
    story.append(Spacer(1, 1))
story.append(Spacer(1, 4))

# ── DIGITAL PRESENCE ──
story.extend(section_header('Digital Presence & Educational Products'))
story.append(Paragraph(
    "<i>Beyond the classroom — products and channels I have designed and built myself.</i>",
    ParagraphStyle('DPNote', parent=body_style, textColor=MUTED,
                   fontName='Body-Italic', spaceAfter=6)
))
for name, url, desc in DIGITAL_PRESENCE:
    story.append(Paragraph(
        f'<b><font color="#047857">{name}</font></b>',
        ParagraphStyle('DPName', parent=body_style, fontName='Body-Bold',
                      fontSize=10, leading=13, textColor=CHARCOAL, spaceBefore=4)
    ))
    story.append(Paragraph(
        f'<font color="#059669"><b>{url}</b></font>',
        ParagraphStyle('DPUrl', parent=body_style, fontName='Body',
                      fontSize=9, leading=12, textColor=EMERALD_DARK, spaceAfter=2)
    ))
    story.append(Paragraph(desc, body_style))
    story.append(Spacer(1, 4))

# ── TEACHING PHILOSOPHY (short) ──
story.extend(section_header('Teaching Philosophy'))
story.append(Paragraph(
    "My classroom is built around three convictions: that Physics is a way of seeing "
    "the world, not a set of formulas to memorise; that technology, used with intention, "
    "deepens understanding rather than distracting from it; and that the teacher's role "
    "is to design experiences in which students think, question, and discover for "
    "themselves. I use student-centred, inquiry-based, and project-based strategies, "
    "supported by continuous assessment and the right technology at the right moment.",
    summary_style
))

# ── Page break for certifications page ──
# (Let certifications flow naturally to fill page 3 — no forced break)

# ── CERTIFICATIONS ──
story.extend(section_header('Professional Certifications'))
story.append(Paragraph(
    "<i>100+ professional development courses completed. Selection below grouped by "
    "domain. Full certificate scans available on request.</i>",
    ParagraphStyle('CertNote', parent=body_style, textColor=MUTED,
                   fontName='Body-Italic', spaceAfter=6)
))
story.extend(certification_list_by_category(CERTIFICATIONS_BY_CAT))

story.append(Spacer(1, 4))

# ── LANGUAGES & PERSONAL INFO ──
story.extend(section_header('Languages & Personal Information'))
lang_table = Table([
    [Paragraph('<b><font color="#047857">Languages</font></b>', body_style),
     Paragraph('Arabic (Native) · English (IELTS Academic, CEFR B2)', body_style)],
    [Paragraph('<b><font color="#047857">Nationality</font></b>', body_style),
     Paragraph('Jordanian', body_style)],
    [Paragraph('<b><font color="#047857">Location</font></b>', body_style),
     Paragraph('Irbid, Jordan', body_style)],
    [Paragraph('<b><font color="#047857">Email</font></b>', body_style),
     Paragraph('fayez.mrouj@gmail.com  ·  fayez.mrouj@live.com', body_style)],
    [Paragraph('<b><font color="#047857">Phone</font></b>', body_style),
     Paragraph('+962 78 8 287 286  ·  +962 78 0 084 600', body_style)],
], colWidths=[CONTENT_W * 0.25, CONTENT_W * 0.75])
lang_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 5),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 5),
    ('LINEBELOW', (0, 0), (-1, -2), 0.4, LINE),
]))
story.append(lang_table)

story.append(Spacer(1, 8))

# ── Closing line ──
story.append(HRFlowable(width='40%', thickness=1, color=GOLD,
                        spaceBefore=2, spaceAfter=4, hAlign='CENTER'))
story.append(Paragraph(
    '"Inspiring curiosity, empowering learners, and shaping future generations through science education."',
    ParagraphStyle('Quote', parent=footer_style, fontSize=9.5,
                   textColor=EMERALD_DARK, fontName='Body-Italic',
                   spaceBefore=2, spaceAfter=2)
))
story.append(Paragraph(
    "References available upon request.",
    footer_style
))

# ── Build ──
doc.build(story)

# Verify output
size = os.path.getsize(OUTPUT)
print(f"✓ CV generated: {OUTPUT}")
print(f"  Size: {size:,} bytes ({size/1024:.1f} KB)")

# Get page count
try:
    import fitz
    pdf = fitz.open(OUTPUT)
    print(f"  Pages: {len(pdf)}")
    pdf.close()
except Exception:
    pass
