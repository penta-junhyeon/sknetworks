package com.skn.user.base.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class Base implements Serializable {
    private int managerSeq;
    private String managerId;
    private String regIp;
    private String updIp;
}
