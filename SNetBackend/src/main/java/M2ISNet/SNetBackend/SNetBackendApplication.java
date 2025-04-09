package M2ISNet.SNetBackend;

import M2ISNet.SNetBackend.config.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class SNetBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SNetBackendApplication.class, args);
	}

}
