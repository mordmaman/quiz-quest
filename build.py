#!/usr/bin/env python3
"""Assemble index.html from the app template, question files and maths generator."""
from pathlib import Path

here = Path(__file__).parent
src = here / "src"
app = (src / "app.html").read_text(encoding="utf-8")
questions = "\n".join((src / f).read_text(encoding="utf-8") for f in ["q1.js", "q2.js", "q3.js"])
maths = (src / "maths.js").read_text(encoding="utf-8")
assert "/*QUESTIONS*/" in app and "/*MATHS*/" in app
out = app.replace("/*QUESTIONS*/", questions).replace("/*MATHS*/", maths)
(here / "index.html").write_text(out, encoding="utf-8")
print(f"index.html written ({len(out):,} characters)")
