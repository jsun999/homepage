package com.yuxing.homepage.entity;


import java.util.Date;

public class Client {
    private Integer id;

    private String name;

    private String phone;

    private String compangy;

    private Date creatTime;

    private String leaveWord;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getCompangy() {
        return compangy;
    }

    public void setCompangy(String compangy) {
        this.compangy = compangy == null ? null : compangy.trim();
    }

    public Date getCreatTime() {
        return creatTime;
    }

    public void setCreatTime(Date creatTime) {
        this.creatTime = creatTime;
    }

    public String getLeaveWord() {
        return leaveWord;
    }

    public void setLeaveWord(String leaveWord) {
        this.leaveWord = leaveWord == null ? null : leaveWord.trim();
    }
}