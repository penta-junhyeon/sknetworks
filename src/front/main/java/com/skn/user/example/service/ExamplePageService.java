package com.skn.user.example.service;

import com.skn.user.base.etc.Page;
import com.skn.user.config.api.constant.ErrorCode;
import com.skn.user.config.api.exception.GeneralException;
import com.skn.user.example.mapper.ExampleMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import java.util.Map;

@Service
@Slf4j
@RequiredArgsConstructor
public class ExamplePageService {

    private final ExampleMapper exampleMapper;

    /****************************************************** 초기화 **********************************************/
    public void init(Map<String, Object> reqMap) {
    }

    /************************************************** READ List ******************************************/

    @Transactional(readOnly = true)
    public void selectExampleList(
            Map<String, Object> reqMap,
            Page page,
            Model model
    ) {
        try {

        } catch (Exception e) {
            e.printStackTrace();
            throw new GeneralException(ErrorCode.DATA_ACCESS_ERROR, e.getMessage());
        }
    }

    /************************************************** READ Object ******************************************/

    @Transactional(readOnly = true)
    public void selectExample(
            String uid,
            Model model
    ) {
        try {

        } catch (Exception e) {
            e.printStackTrace();
            throw new GeneralException(ErrorCode.DATA_ACCESS_ERROR, e.getMessage());
        }
    }
}
