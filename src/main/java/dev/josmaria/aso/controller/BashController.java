package dev.josmaria.aso.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.josmaria.aso.service.BashService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BashController {

    private final BashService bashService;

    @GetMapping
    public ResponseEntity<String> sayHello() throws IOException, InterruptedException {
        return ResponseEntity.ok(bashService.firstScript());
    }
}
