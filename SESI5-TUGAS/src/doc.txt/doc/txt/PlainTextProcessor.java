package doc.txt;

import doc.core.DocumentProcessor;

public class PlainTextProcessor implements DocumentProcessor {

    @Override
    public String process(String content) {
        return "=== Proses Dokumen Format Teks Biasa ===\n" +
               "Isi Dokumen: " + content + "\n" +
               "Strategi untuk TRC (Tokyo Racing Course) 2025 sangat penting dalam mengoptimalkan performa tim dan pengelolaan lintasan.";
    }

    @Override
    public String getFormatName() {
        return "Plain Text (Teks Biasa)";
    }
}
