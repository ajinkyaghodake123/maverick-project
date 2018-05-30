package com.stackroute.maverick.token;




import org.springframework.beans.factory.annotation.Value;

/**
 * Config JWT.
 * Only one property 'shuaicj.security.jwt.secret' is mandatory.
 *
 * 
 */
/*@Getter
@ToString*/
public class JwtAuthenticationConfig {

   // @Value("${shuaicj.security.jwt.url:/login}")
    private String url;

        private String header;

   
    private String prefix;

    
    private int expiration; // default 24 hours


    private String secret;

    public String getUrl() {
		return "/login";
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getHeader() {
		return "Authorization";
	}

	public void setHeader(String header) {
		this.header = header;
	}

	public String getPrefix() {
		return "Bearer";
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public int getExpiration() {
		return 24*60*60;
	}

	public void setExpiration(int expiration) {
		this.expiration = expiration;
	}

	public String getSecret() {
		return "otherpeopledontknowit";
	}

	public void setSecret(String secret) {
		this.secret = secret;
	}
}