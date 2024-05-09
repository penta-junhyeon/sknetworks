package com.skn.user.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class ApplicationProperty {
    public static String CRYPTO_IV;
    public static String CRYPTO_KEY_EMAIL;
    public static String CRYPTO_KEY_PHONE;
    public static String CRYPTO_KEY_CARD;
    public static String CRYPTO_KEY_ETC;

    public static String USER_SITE_URL;
    public static String ADMIN_SITE_URL;
    public static String USER_UPLOAD_URL;
    public static String FUND_RAW_DAT_PATH;
    public static String FUND_RAW_DAT_PATH_DONE;
    public static String FUND_RAW_DAT_PATH_FAIL;

    public static String STIBEE_API_URL;

    @Value("${jihaksa.crypto.iv}")
    public void setCryptoIv(String value) {
        CRYPTO_IV = value;
    }

    @Value("${jihaksa.crypto.key.email}")
    public void setCryptoKeyEmail(String value) {
        CRYPTO_KEY_EMAIL = value;
    }

    @Value("${jihaksa.crypto.key.phone}")
    public void setCryptoKeyPhoneno(String value) {
        CRYPTO_KEY_PHONE = value;
    }

    @Value("${jihaksa.crypto.key.card}")
    public void setCryptoKeyCard(String value) {
        CRYPTO_KEY_CARD = value;
    }

    @Value("${jihaksa.crypto.key.etc}")
    public void setCryptoKeyEtc(String value) {
        CRYPTO_KEY_ETC = value;
    }

    @Value("${jihaksa.upload.url}")
    public void setUserUploadUrl(String value) {
        USER_UPLOAD_URL = value;
    }

}
