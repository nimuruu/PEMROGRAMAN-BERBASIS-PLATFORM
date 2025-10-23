package doc.app;

import doc.core.DocumentProcessor;
import java.util.ServiceLoader;

public class MainApp {
    public static void main(String[] args) {
        ServiceLoader<DocumentProcessor> loader = ServiceLoader.load(DocumentProcessor.class);

        System.out.println("=== Sistem Pemroses Dokumen TRC 2025 ===");
        for (DocumentProcessor processor : loader) {
            System.out.println("\nFormat ditemukan: " + processor.getFormatName());
            System.out.println(processor.process("Laporan strategi balapan dan analisis performa tim."));
        }
    }
}
