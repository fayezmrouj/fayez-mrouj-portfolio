#!/usr/bin/env python3
"""
Create a clean, GitHub-upload-ready archive of the Fayez Mrouj portfolio project.
This version:
- Excludes node_modules, .next, dev artifacts
- Excludes the deploy archive itself (no recursive self-reference)
- Excludes the original .docx (CV.pdf is enough)
- Produces a flat structure for easy GitHub upload
"""
import os
import tarfile
from pathlib import Path

PROJECT_ROOT = Path("/home/z/my-project")
OUTPUT = Path("/home/z/my-project/download/fayez-mrouj-portfolio-github.zip")

# Directories to include (only essential ones for deployment)
INCLUDE_DIRS = [
    "src",
    "public",
    "prisma",
    "scripts",  # CV generator script (useful for future updates)
]

INCLUDE_FILES = [
    ".gitignore",
    ".env.example",
    "README.md",
    "DEPLOYMENT.md",
    "package.json",
    "bun.lock",
    "next.config.ts",
    "tsconfig.json",
    "tailwind.config.ts",
    "postcss.config.mjs",
    "eslint.config.mjs",
    "components.json",
]

# Patterns to exclude
EXCLUDE_PATTERNS = [
    "node_modules",
    ".next",
    ".zscripts",
    ".claude",
    ".z-ai-config",
    "upload",
    "download",
    "worklog.md",
    "dev.log",
    "server.log",
    "examples",
    "mini-services",
    "db",
    "Caddyfile",
    "skills",
    "scripts/extracted",
    "scripts/extract_content.py",
    "scripts/extract_skills.py",
    "scripts/preview_cv.py",
    "scripts/create_deploy_archive.py",
    "fayez-mrouj-portfolio-deploy.zip",  # don't include the deploy archive itself
    "fayez-mrouj-portfolio-deploy.tar.gz",
    "Fayez-Mrouj-CV.docx",  # CV.pdf is enough
    "portrait.png",  # .jpg and .webp are enough
]


def should_exclude(path: str) -> bool:
    for pat in EXCLUDE_PATTERNS:
        if pat in path:
            return True
    return False


def main():
    import zipfile
    print(f"Creating GitHub-ready ZIP: {OUTPUT}")
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    TOP = "fayez-mrouj-portfolio/"
    file_count = 0
    total_size = 0

    with zipfile.ZipFile(OUTPUT, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        # Add directories
        for d in INCLUDE_DIRS:
            src = PROJECT_ROOT / d
            if not src.exists():
                continue
            print(f"\n[Dir] {d}/")
            for root, dirs, files in os.walk(str(src)):
                # Filter directories in-place
                dirs[:] = [d for d in dirs if not should_exclude(os.path.join(root, d))]
                for f in files:
                    full = Path(root) / f
                    rel = str(full.relative_to(PROJECT_ROOT))
                    if should_exclude(rel):
                        continue
                    arc = TOP + rel
                    zf.write(str(full), arc)
                    size = full.stat().st_size
                    file_count += 1
                    total_size += size
                    print(f"  + {arc} ({size:,} bytes)")

        # Add individual files
        print(f"\n[Files]")
        for f in INCLUDE_FILES:
            src = PROJECT_ROOT / f
            if src.exists():
                arc = TOP + f
                zf.write(str(src), arcname=arc)
                size = src.stat().st_size
                file_count += 1
                total_size += size
                print(f"  + {arc} ({size:,} bytes)")

    zip_size = OUTPUT.stat().st_size
    print(f"\n✓ ZIP created: {OUTPUT}")
    print(f"  Files: {file_count}")
    print(f"  Uncompressed size: {total_size:,} bytes ({total_size/1024:.1f} KB)")
    print(f"  Compressed size: {zip_size:,} bytes ({zip_size/1024:.1f} KB)")


if __name__ == "__main__":
    main()
