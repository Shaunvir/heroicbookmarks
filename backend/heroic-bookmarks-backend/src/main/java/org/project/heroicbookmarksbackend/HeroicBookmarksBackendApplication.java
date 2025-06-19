package org.project.heroicbookmarksbackend;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.HashMap;
import java.util.Map;

@SpringBootApplication
public class HeroicBookmarksBackendApplication {

    public static void main(String[] args) {

        Dotenv dotenv = Dotenv.configure().load();
        Map<String, Object> envMap = new HashMap<>();
        dotenv.entries().forEach(entry -> envMap.put(entry.getKey(), entry.getValue()));

        // Create SpringApplication instance
        SpringApplication app = new SpringApplication(HeroicBookmarksBackendApplication.class);

        // Inject the dotenv properties into Spring Environment before startup
        app.addInitializers(applicationContext -> {
            ConfigurableEnvironment env = applicationContext.getEnvironment();
            env.getPropertySources().addFirst(new MapPropertySource("dotenvProperties", envMap));
        });

        // Run the application
        app.run(args);
    }
}
