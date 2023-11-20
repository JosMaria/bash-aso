package dev.josmaria.aso.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.springframework.stereotype.Service;

@Service
public class BashService {

    private static String PATH_BIN_BASH = "/usr/bin/bash";

    public String firstScript() throws IOException, InterruptedException {
        ProcessBuilder processBuilder = new ProcessBuilder(PATH_BIN_BASH, "-c", "ls");
        Process process = processBuilder.start();

        // Captura la salida del proceso
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder output = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            output.append(line).append("\n");
        }

        // Espera a que el proceso termine y obtiene el código de salida
        int exitCode = process.waitFor();

        if (exitCode == 0) {
            return "Script ejecutado correctamente. Salida:\n" + output.toString();
        } else {
            return "Error al ejecutar el script";
        }
    }

    public Object installFTP() throws IOException, InterruptedException {
        ProcessBuilder processBuilder = new ProcessBuilder(PATH_BIN_BASH, "-c", "cd /mnt/cdrom/x86_64 && rpm -ivh vsftpd-3.0.3-lp152.7.6.x86_64.rpm && cd /mnt/cdrom/noarch rpm -ivh system-user-ftp-20170617-lp152.5.114.noarch.rpm");
        Process process = processBuilder.start();

        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        StringBuilder output = new StringBuilder();
        String line;

        while ((line = reader.readLine()) != null) {
            output.append(line).append("\n");
        }

        int exitCode = process.waitFor();

        if (exitCode == 0) {
            return "Script ejecutado correctamente. Salida:\n" + output.toString();
        } else {
            return "Error al ejecutar el script";
        }
    }
}
