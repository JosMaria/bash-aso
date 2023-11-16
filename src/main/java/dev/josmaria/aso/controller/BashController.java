package dev.josmaria.aso.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BashController {
    
    @GetMapping
    public ResponseEntity<String> sayHello() {
        try {
            ProcessBuilder processBuilder = new ProcessBuilder("/usr/bin/bash", "-c", "ls");
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
                return ResponseEntity.ok("Script ejecutado correctamente. Salida:\n" + output.toString());
            } else {
                return new ResponseEntity<>("Error al ejecutar el script", HttpStatus.CONFLICT);
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
            return new ResponseEntity<>("Excepción al ejecutar el script: " + e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
        }
    }
}
