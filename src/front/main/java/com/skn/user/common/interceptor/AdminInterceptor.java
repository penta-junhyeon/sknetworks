package com.skn.user.common.interceptor;


import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by bestcure.
 * Date: 2021-02-13
 * Sample 인터셉터
 */

@Slf4j
public class AdminInterceptor implements HandlerInterceptor {

    @Value("${jihaksa.upload.path}")
    private String uploadPath;

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler
    ) throws Exception {
        request.setAttribute("uploadUrl", uploadPath);

        return true;
    }

    @Override
    public void postHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler,
            ModelAndView modelAndView
    ) throws Exception {

        if (modelAndView != null) {
            modelAndView.addObject("uploadUrl", uploadPath);
        }
    }

    private boolean isRequestSuccessful(HttpServletResponse response) {

        int statusCode = response.getStatus();

        if (statusCode >= 200 && statusCode < 300) {
            return true;
        } else
            return false;
    }

}
