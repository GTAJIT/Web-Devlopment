from pypdf import PdfWriter
merger = PdfWriter
for i in ["file1.pdf", "file2.pdf", "file3.pdf"]:
    merger.append(i)
merger.write("merged.pdf")
merger.close