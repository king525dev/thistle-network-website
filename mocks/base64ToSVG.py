import re
import base64
from pathlib import Path


def extract_and_replace_svgs():
    current_dir = Path.cwd()

    # Find all HTML files in the current directory
    html_files = list(current_dir.glob("*.html"))

    # Match Base64-encoded SVG data
    pattern = re.compile(
        r'data:image/svg\+xml;base64,([^"\']+)'
    )

    for html_file in html_files:
        print(f"\nProcessing: {html_file.name}")

        # Read HTML
        html = html_file.read_text(encoding="utf-8")

        # Find all embedded SVGs
        matches = list(pattern.finditer(html))

        if not matches:
            print("  No embedded SVGs found.")
            continue

        # Create backup
        backup_file = html_file.with_suffix(".html.bak")
        backup_file.write_text(html, encoding="utf-8")

        # Replace from the end so string positions remain valid
        for i, match in reversed(list(enumerate(matches, 1))):
            base64_data = match.group(1)

            # Filename for the extracted SVG
            svg_filename = f"{html_file.stem}_svg_{i}.svg"
            svg_path = html_file.parent / svg_filename

            # Decode and save SVG
            svg_data = base64.b64decode(base64_data)
            svg_path.write_bytes(svg_data)

            # Replace the entire data URI with the SVG filename
            html = (
                html[:match.start()]
                + svg_filename
                + html[match.end():]
            )

            print(f"  Created: {svg_filename}")

        # Write modified HTML
        html_file.write_text(html, encoding="utf-8")

        print(f"  Updated: {html_file.name}")
        print(f"  Backup:  {backup_file.name}")


if __name__ == "__main__":
    extract_and_replace_svgs()
