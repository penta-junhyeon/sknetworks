package com.skn.user.base.etc;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class Page {

    public static final int cuttingPageNum = 5;
    private int currentPage;         // 현재 페이지

    private int offset;              // 보여줄 데이터 리스트 시작지점
    private int cutPage;             // 화면에 보여줄 페이지 개수

    private int page;                // 총 페이지 개수

    private int perPage;             // 보여줄 데이터 리스트 숫자
    private int startPerPage;        // 커팅된 페이지의 처음 페이지
    private int finalPerPage;        // 커팅된 페이지의 마지막 페이지



    public Page (
            int cutPage,
            int currentPage,
            int perPage
    ) {
        this.currentPage = currentPage;
        this.cutPage = cutPage;
        this.perPage = perPage;
        this.offset = (this.currentPage - 1) * perPage;
        this.startPerPage = start();
    }

    public Page setPage(int page) {
        this.page = (int) Math.ceil((double) page / this.perPage);
        this.finalPerPage = end();
        return this;
    }

    private int start() {

        int s = (this.currentPage - 1) / cutPage  * cutPage + 1;

        return s;
    }

    private int end() {

        int e = Math.min((this.currentPage - 1) / cutPage * cutPage + cutPage, this.page);

        return e;
    }
}

