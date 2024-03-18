/*
    -------------------------------------------------------------------
    | [리스트 상위 뎁스 구분 표시]
    | 'appoint'  : 'leader' <= 1뎁스 영역에 해당되는 소제목으로 구분 표시
    | 'appoint'  : 'split'  <= 해당 요소 바로 위에 진한 구분선 표시
    -------------------------------------------------------------------
    | [페이지 표시 형태]
    | 'type'     : 'page'   <= 페이지 형태로 새창열림
    | 'type'     : 'popup'  <= 팝업 형태로 새창열림
    | 'type'     : 'url'    <= 타 url링크 형태로 새창열림
    -------------------------------------------------------------------
    | [진행범위 표시]
    | 'progress' : '110'    <= 완료(신규이슈)
    | 'progress' : '100'    <= 완료
    | 'progress' : '101'    <= 개발이슈(별도표기)
    | 'progress' : '102'    <= 파라미터 페이지(별도표기)
    | 'progress' : '99'     <= 공통
    | 'progress' : '70'     <= 수정사항
    | 'progress' : '50'     <= 검수
    | 'progress' : '1'      <= 삭제
    | 'progress  : '0'      <= 표시 없음
    | 'progress' : ''       <= 표시 없음
    -------------------------------------------------------------------
    | [페이지 리스트]
    | pageList0  = 효성가이드 목록
    | pageList1  = 효성티앤씨(WEB) : 국문(KOR) 목록
    | pageList2  = 효성티앤씨(WEB) : 영문(ENG) 목록
    -------------------------------------------------------------------
*/

var guideData = [

    // pageList0 = 효성티엔씨 가이드 목록
    [ 
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W01',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W01.html',
            'update':'',
            'memo':''
        },
        {
            'appoint':'',
            'id':'HTNCWXD10D00W02',
            'class':'Template',
            '1depth':'',
            '2depth':'',
            'page-name':'Sustainability - Thumbnail display',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-06-21',
            'end-date':'2023-06-21',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W02.html',
            'update':'2023-07-24',
            'memo':
                '2023-07-24 홍수기' + '<br />' +
                '1. 썸네일 가이드 추가, 마크업 변경' + '<br />' + '<br />' +
                '2023-06-22 홍수기' + '<br />' +
                '1 .Sustainability 썸네일 템플릿 완료' + '<br />' +
                '2. bordersmooth효과 적용된 이미지 교체' + '<br />' + '<br />' +
                '2023-06-21 홍수기' + '<br />' +
                '1. 모바일 스와이퍼슬라이드 작업'

        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W03',
            'class':'page-default-sustainability',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W03.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W04',
            'class':'Template',
            '1depth':'',
            '2depth':'',
            'page-name':'모바일에서 슬라이드로 바뀌는 Thumbnail display',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-06-22',
            'end-date':'2023-06-22',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W04.html',
            'update':'2023-06-22',
            'memo':
                '2023-06-22 홍수기' + '<br>' +
                '1. 모바일에서 스와이퍼로 변경되는 썸네일 템플릿 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W05',
            'class':'Template',
            '1depth':'',
            '2depth':'',
            'page-name':'Sustainability - 나눔경영 슬라이드',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-06-22',
            'end-date':'2023-06-23',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W05.html',
            'update':'2023-06-27',
            'memo': 
                '2023-06-27 홍수기' + '<br>' +
                '1. 슬라이드 템플릿 PC, MO 완료' + '<br>' + '<br>' +
                '2023-06-23 홍수기' + '<br>' +
                '1. 나눔경영 슬라이드 템플릿 PC 작업' + '<br>' + '<br>' +
                '2023-06-22 홍수기' + '<br>' +
                '1. 나눔경영 슬라이드 템플릿 PC 작업'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W06',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W06.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W07',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'다이어그램 모음1',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-06-27',
            'end-date':'2023-06-27',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W07.html',
            'update':'2023-07-18',
            'memo':
                '2023-07-18 강예인' + '<br>' +
                '1. 효성 TNC 다이어그램 이미지 작업 완료' + '<br>' + 
                '- Sustainability 기후변화대응' + '<br>' + 
                '- Sustainability 자원순환' + '<br>' + 
                '- Sustainability 인권경영' + '<br>' + 
                '- Sustainability 안전보건경영' + '<br>' + 
                '- Sustainability 그린경영' + '<br>' + 
                '- Sustainability 상생경영' + '<br>' + 
                '- Sustainability 정보보안' + '<br>' + 
                '- Sustainability 윤리경영' + '<br>' + 
                '- Sustainability 리스크관리' + '<br>' + 
                '- Sustainability 지속가능경영' + '<br>' + '<br>' +
                '2023-07-17 강예인' + '<br>' +
                '1. 효성 TNC 다이어그램 이미지 작업 (진행 - 80%)' + '<br>' + '<br>' +
                '2023-06-27 홍수기' + '<br>' +
                '1. 템플릿 - 다이어그램 정리 시작'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W08',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'다이어그램 모음2',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'강예인',
            'start-date':'2023-07-12',
            'end-date':'',
            'progress':'70',
            'url':'exercise/HTNCWXD10D00W08.html',
            'update':'',
            'memo':
                '2023-07-12 강예인' + '<br>' +
                '1. 템플릿 - 다이어그램 제작중'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W09',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'아코디언 템플릿',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'강예인',
            'start-date':'2023-07-18',
            'end-date':'2023-07-27',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W09.html',
            'update':'2023-08-14',
            'memo':
                '2023-08-14 홍수기' + '<br>' +
                '1. 아코디언 가이드 수정' + '<br>' + '<br>' +
                '2023-07-27 홍수기' + '<br>' +
                '1. 아코디언 가이드 수정작업 및 추가 작업' + '<br>' + '<br>' +
                '2023-07-18 강예인' + '<br>' +
                '1. 효성 TNC 아코디언 작업시작'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W10',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'table 템플릿',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-28',
            'end-date':'2023-07-28',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W10.html',
            'update':'',
            'memo':
                '2023-07-28 홍수기' + '<br>' +
                '1. table 템플릿 grid로 작업'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W11',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'form 템플릿',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-28',
            'end-date':'2023-08-01',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W11.html',
            'update':'2023-08-01',
            'memo':
                '2023-08-01 홍수기' + '<br>' +
                '1 .form 템플릿 가이드 - 완료' + '<br>' + '<br>' +
                '2023-07-31 홍수기' + '<br>' +
                '1. form 템플릿 가이드 작업' + '<br>' + '<br>' +
                '2023-07-28 홍수기' + '<br>' +
                '1. form 템플릿 작업 중'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W12',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'board 템플릿',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-08-02',
            'end-date':'2023-08-04',
            'progress':'100',
            'url':'exercise/HTNCWXD10D00W12.html',
            'update':'',
            'memo':
                '2023-08-04 홍수기' + '<br>' +
                '1. board 템플릿 가이드 완료' + '<br>' + '<br>' +
                '2023-08-02 홍수기' + '<br>' +
                '1. board 템플릿 가이드 작업 중'
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W13',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W13.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W14',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W14.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W15',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W15.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W16',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W16.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W17',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W17.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W18',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W18.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W19',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W19.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W20',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W20.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W21',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W21.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W22',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W22.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W23',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W23.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W24',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W24.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W25',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W25.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W26',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W26.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W27',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W27.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W28',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W28.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W29',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W29.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W30',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W30.html',
            'update':'',
            'memo':''
        },
        { 
            'appoint':'',
            'id':'HTNCWXD10D00W31',
            'class':'Exercise',
            '1depth':'',
            '2depth':'',
            'page-name':'',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'',
            'url':'exercise/HTNCWXD10D00W31.html',
            'update':'',
            'memo':''
        },
    ],

    // pageList1  = 효성티앤씨(WEB) : 국문(KOR) 목록
    [
        { 
            'appoint':'',
            'id':'GUT001W01',
            'class':'COMM',
            '1depth':'',
            '2depth':'',
            'page-name':'공통 Guide Line',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'2023-06-08',
            'end-date':'',
            'progress':'99',
            'url':'',
            'update':'2023-06-13',
            'memo': 
                '2023-06-13 홍수기' + '<br>' +
                '1. 컬러가이드 정리' + '<br>'  + '<br>' +
                '2023-06-12 주은소' + '<br>' +
                '1. T&amp;C 가이드 정리'
        },
        { 
            'appoint':'',
            'id':'GUT001W02',
            'class':'COMM',
            '1depth':'',
            '2depth':'',
            'page-name':'공통 Component',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-06-08',
            'end-date':'',
            'progress':'99',
            'url':'',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br>' +
                '1. 컬러 추가' + '<br>' +
                '2. 버튼 호버 추가' + '<br>' + '<br>' +
                '2023-08-09 최준현' + '<br>' +
                '1. 버튼 가이드 스타일 추가' + '<br>' +
                '2. 타이틀 가이드 추가' + '<br>' +
                '3. 컬러 추가' + '<br>' +
                '4. 공통 스타일 추가' + '<br>' + '<br>' +
                '2023-08-08 최준현' + '<br>' +
                '1. 컬러 추가' + '<br>' + '<br>' +
                '2023-08-07 최준현' + '<br>' +
                '1. 컬러 추가' + '<br>' + '<br>' +
                '2023-08-02 최준현' + '<br>' +
                '1. 타이틀 가이드 추가 및 수정' + '<br>' + '<br>' +
                '2023-07-27 최준현' + '<br>' +
                '1. 버튼 가이드 확장성 클래스 추가' + '<br>' + '<br>' +
                '2023-07-18 최준현' + '<br>' +
                '1. 버튼 가이드 수정' + '<br>' + '<br>' +
                '2023-06-21 최준현' + '<br>' +
                '1. variable 업데이트' + '<br>' +
                '2. 가이드 dataDisplay 작업중' + '<br>' + '<br>' +
                '2023-06-20 최준현' + '<br>' +
                '1. 가이드 버튼 squircle-smooth 추가' + '<br>' +
                '2. 가이드 타이틀 추가' + '<br>' +
                '3. 가이드 dataDisplay 작업중' + '<br>' + '<br>' +
                '2023-06-19 최준현' + '<br>' +
                '1. 가이드 버튼 squircle-smooth 추가' + '<br>' +
                '2. 가이드 타이틀 추가' + '<br>' +
                '3. 가이드 dataDisplay 작업중' + '<br>' + '<br>' +
                '2023-06-16 최준현' + '<br>' +
                '1. 버튼 가이드 수정' + '<br>' +
                '2. 타이틀 가이드 수정' + '<br>' +
                '3. 데이터 가이드 작업중' + '<br>' + '<br>' +
                '2023-06-15 최준현' + '<br>' +
                '1. 탭 가이드 완성' + '<br>' +
                '2. 타이틀 가이드 완성' + '<br>' + '<br>' +
                '2023-06-14 최준현' + '<br>' +
                '1. 버튼 가이드 완성' + '<br>' + '<br>' +
                '2023-06-13 주은소' + '<br>' +
                '1. Sustainability 서브 타이틀 작업 완료' + '<br>' + '<br>' +
                '2023-06-13 최준현' + '<br>' +
                '1. 버튼 가이드 작업' + '<br>' + '<br>' +
                '2023-06-12 최준현' + '<br>' +
                '1. 버튼 가이드 작업' + '<br>' + '<br>' +
                '2023-06-09 최준현' + '<br>' +
                '1. 버튼 가이드 작업' + '<br>' + '<br>' +
                '2023-06-08 최준현' + '<br>' +
                '1. 버튼 가이드 작업' + '<br>' + '<br>' +
                '2023-06-08 주은소' + '<br>' +
                '1. 버튼 컴포넌트 (준현리더님) 지원' + '<br>' +
                '2. 서브 타이틀 생성 시작'
        },
        { 
            'appoint':'',
            'id':'GUT001W03',
            'class':'COMM',
            '1depth':'',
            '2depth':'',
            'page-name':'공통 Template',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-06-08',
            'end-date':'',
            'progress':'99',
            'url':'',
            'update':'2023-08-09',
            'memo': 
                '2023-08-09 최준현' + '<br>' +
                '1. 아코디언 가이드 스타일 수정' + '<br>' +
                '2. 다이어그램 가이드 스타일 수정' + '<br>' +
                '3. 썸네일 가이드 스타일 수정' + '<br>' +
                '4. Data Display 스타일 추가' + '<br>' + '<br>' +
                '2023-08-08 최준현' + '<br>' +
                '1. 타이틀 가이드 추가' + '<br>' +
                '2. Data Display 가이드 추가' + '<br>' + '<br>' +
                '2023-08-07 최준현' + '<br>' +
                '1. thumbnail 가이드 추가 및 수정' + '<br>' + '<br>' +
                '2023-08-03 주은소' + '<br>' +
                '1. 다이어그램 컴포넌트 이슈 지원' + '<br>' +
                '2. Table 컴포넌트 이슈 지원' + '<br>' + '<br>' +
                '2023-08-02 최준현' + '<br>' +
                '1. 불릿 리스트 추가' + '<br>' +
                '2. 다이어그램 스타일 수정' + '<br>' + '<br>' +
                '2023-08-01 홍수기' + '<br>' +
                '1. Pagination 템플릿 작업 중' + '<br>' + '<br>' +
                '2023-07-31 최준현' + '<br>' +
                '1. 고객사 피드백 - 탭 가이드 스타일 수정' + '<br>' + '<br>' +
                '2023-07-28 최준현' + '<br>' +
                '1. 탭 가이드 완성' + '<br>' + '<br>' +
                '2023-07-27 홍수기' + '<br>' +
                '1. table 가이드 스타일 수정' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. Company 키비주얼 완료' + '<br>' + '<br>' +
                '2023-07-18 최준현' + '<br>' +
                '1. 탭 가이드 제작' + '<br>' + '<br>' +
                '2023-07-14 최준현' + '<br>' +
                '1. 탭 가이드 제작' + '<br>' + '<br>' +
                '2023-07-05 최준현' + '<br>' +
                '1. 탭 가이드 제작' + '<br>' + '<br>' +
                '2023-06-27 최준현' + '<br>' +
                '1. 가이드 타이틀 추가' + '<br>' + '<br>' +
                '2023-06-23 최준현' + '<br>' +
                '1. 가이드 dataDisplay 클래스 수정 및 인포 추가' + '<br>' +
                '2. 가이드 탭 작업중' + '<br>' + '<br>' +
                '2023-06-19 홍수기' + '<br>' +
                '1. Sustainability 기후변화대응/자원순환/오염저감/인권경영/상생경영 썸네일 템플릿 pc, mo 작업(mo에서 스와이퍼되는 템플릿은 보류)' + '<br>' + '<br>' +
                '2023-06-16 홍수기' + '<br>' +
                '1. Sustainability 외부평가/참여이니셔티브/ESG 정책/그린경영 썸네일템플릿 pc, mo 작업' + '<br>' + '<br>' +
                '2023-06-14 최준현' + '<br>' +
                '1. 탭 가이드 작업' + '<br>' + '<br>' +
                '2023-06-13 홍수기' + '<br>' +
                '1. Sustainability 보고서 썸네일템플릿 pc, mo 작업' + '<br>' + '<br>' +
                '2023-06-12 주은소' + '<br>' +
                '1. Sustainability 서브 타이틀 및 가이드 제작' + '<br>' + '<br>' +
                '2023-06-12 홍수기' + '<br>' +
                '1. 테이블,불릿리스트 PC 템플릿 작업' + '<br>' + '<br>' +
                '2023-06-08 홍수기' + '<br>' +
                '1. 3뎁스 탭메뉴 pc 작업 (mo 디자인 확정 안 됨)'
        },
        { 
            'appoint':'',
            'id':'HTNCWK01HEADER',
            'class':'COMM',
            '1depth':'',
            '2depth':'',
            'page-name':'공통 Header',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'2023-06-20',
            'end-date':'2023-07-18',
            'progress':'99',
            'url':'',
            'update':'2023-07-19',
            'memo': 
                '2023-07-19 김현기' + '<br>' +
                '1. 스크롤 모션 개선' + '<br>' + '<br>' +
                '2023-07-18 김현기' + '<br>' +
                '1. 스크롤 모션 개선'
        },
        { 
            'appoint':'',
            'id':'3depth',
            'class':'COMM',
            '1depth':'',
            '2depth':'',
            'page-name':'공통 3depth',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'99',
            'url':'',
            'update':'2023-07-20',
            'memo': 
                '2023-07-20 주은소' + '<br>' +
                '1. 3depth 수정'
        },
        { 
            'appoint':'',
            'id':'4depth',
            'class':'COMM',
            '1depth':'',
            '2depth':'',
            'page-name':'공통 4depth',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'99',
            'url':'',
            'update':'2023-07-20',
            'memo': 
                '2023-07-20 주은소' + '<br>' +
                '1. 4depth 수정' + '<br>' + '<br>' +
                '2023-06-15 주은소' + '<br>' +
                '1. Sustaiability 4depth 및 서브 타이틀 마우스 휠 인터렉션' + '<br>' + '<br>' +
                '2023-06-14 주은소' + '<br>' +
                '1. Sustainability 4depth 및 서브 타이틀 마우스 휠 인터렉션'
        },
        { 
            'appoint':'',
            'id':'HTNCWK03FOOTER',
            'class':'COMM',
            '1depth':'',
            '2depth':'',
            'page-name':'공통 Footer',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'2023-06-09',
            'end-date':'2023-06-12',
            'progress':'99',
            'url':'kor/HTNCWK03FOOTER.html',
            'update':'2023-08-09',
            'memo': 
                '2023-08-09 최준현' + '<br>' +
                '1. 뉴스레터 버튼 삭제' + '<br>' + '<br>' +
                '2023-06-12 주은소' + '<br>' +
                '1. Footer 공통 컴포넌트 제작'
        },
        { 
            'appoint':'leader',
            'id':'HTNCWKD00D00W00',
            'class':'page',
            '1depth':'Main',
            '2depth':'',
            'page-name':'효성티엔씨 메인',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-06-08',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD00D00W00.html',
            'update':'2023-07-20',
            'memo': 
                '2023-07-20 홍수기' + '<br>' +
                '1. 메인 섹션1 작업 중' + '<br>' + '<br>' +
                '2023-07-19 홍수기' + '<br>' +
                '1. 메인 섹션1 작업 중' + '<br>' + '<br>' +
                '2023-07-17 홍수기' + '<br>' +
                '1. 메인 섹션1 작업 중' + '<br>' + '<br>' +
                '2023-06-08 홍수기' + '<br>' +
                '1. 메인 카드섹션 pc 시작'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD01D00W01',
            'class':'page',
            '1depth':'Micro',
            '2depth':'',
            'page-name':'RE:GEN 마이크로',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD01D00W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'leader',
            'id':'HTNCWKD10D10W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'회사소개',
            'page-name':'소개',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-24',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D10W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료' + '<br>' + '<br>' +
                '2023-07-24 홍수기' + '<br>' +
                '1. 키비주얼 작업 중'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D11W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'회사소개',
            'page-name':'인사말',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D11W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D12W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'회사소개',
            'page-name':'Hyosung Way',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D12W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D13W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'회사소개',
            'page-name':'연혁',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D13W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료' + '<br>' +
                '2. 마크업 시작'

        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D14W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'회사소개',
            'page-name':'R&amp;D',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D14W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D15W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'회사소개',
            'page-name':'글로벌 네트워크',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D15W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD10D20W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'기업지배구조 &gt; 기업지배구조 헌장',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D20W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D20W02',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'기업지배구조 &gt; 이사회 구성 및 운영현황',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D20W02.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        // { 
        //     'appoint':'',
        //     'id':'HTNCWKD10D20W02?tab1=1',
        //     'class':'page',
        //     '1depth':'Company',
        //     '2depth':'IR',
        //     'page-name':'기업지배구조 &gt; 이사회 구성 및 운영현황 [TAB] 이사회',
        //     'type':'param',
        //     'planner-name':'',
        //     'designer-name':'',
        //     'publisher-name':'',
        //     'start-date':'',
        //     'end-date':'',
        //     'progress':'102',
        //     'url':'kor/HTNCWKD10D20W02.html?tab1=1',
        //     'update':'',
        //     'memo': 
        //         ''
        // },
        // { 
        //     'appoint':'',
        //     'id':'HTNCWKD10D20W02?tab1=2',
        //     'class':'page',
        //     '1depth':'Company',
        //     '2depth':'IR',
        //     'page-name':'기업지배구조 &gt; 이사회 구성 및 운영현황 [TAB] 활동현황',
        //     'type':'param',
        //     'planner-name':'',
        //     'designer-name':'',
        //     'publisher-name':'',
        //     'start-date':'',
        //     'end-date':'',
        //     'progress':'102',
        //     'url':'kor/HTNCWKD10D20W02.html?tab1=2',
        //     'update':'',
        //     'memo': 
        //         ''
        // },
        { 
            'appoint':'',
            'id':'HTNCWKD10D20W03',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'기업지배구조 &gt; 이사회 산하 위원회 현황',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D20W03.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D20W04',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'기업지배구조 &gt; 감사기구 현황',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D20W04.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D20W05',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'기업지배구조 &gt; 주주총회',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D20W05.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D20W06',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'기업지배구조 &gt; 신용등급',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D20W06.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD10D21W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'재무정보 &gt; 요약재무상태표',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D21W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D21W02',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'재무정보 &gt; 요약손익계산서',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D21W02.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D21W03',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'재무정보 &gt; 재무지표',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D21W03.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD10D22W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'IR 정보',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D22W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD10D23W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'공시 &gt; 공시자료(DART)',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D23W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D23W02',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'공시 &gt; 공시정보관리규정',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D23W02.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD10D24W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'공고',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D24W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD10D25W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'IR 자료실 &gt; 영업보고서',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D25W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D25W02',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'IR 자료실 &gt; 감사보고서',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D25W02.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D25W03',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'IR 자료실 &gt; 사업보고서',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D25W03.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D25W04',
            'class':'page',
            '1depth':'Company',
            '2depth':'IR',
            'page-name':'IR 자료실 &gt; Financial Statements',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D25W04.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD10D30W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'인재채용',
            'page-name':'인재상',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D30W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D31W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'인재채용',
            'page-name':'인사제도',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D31W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D32W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'인재채용',
            'page-name':'직무소개',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D32W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD10D33W01',
            'class':'page',
            '1depth':'Company',
            '2depth':'인재채용',
            'page-name':'조직별 사업분야',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'70',
            'url':'kor/HTNCWKD10D33W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br>' + '<br>' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 완료'
        },
        { 
            'appoint':'leader',
            'id':'HTNCWKD20D10W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'CREORA &gt; CREORA 소개',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD10D33W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D10W02',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'CREORA &gt; CREORA 스판덱스',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D10W02.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D10W03',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'CREORA &gt; CREORA 나일론',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D10W03.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D10W04',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'CREORA &gt; CREORA 폴리에스터',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D10W04.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D11W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'regen &gt; regen 소개',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D11W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D11W02',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'regen &gt; regen 스판덱스',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D11W02.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D11W03',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'regen &gt; regen 나일론',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D11W03.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D11W04',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'regen &gt; regen 폴리에스터',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D11W04.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D11W05',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'regen &gt; regen 바이오',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D11W05.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D11W06',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'regen &gt; regen 인더스트리',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D11W06.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D12W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'직물',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D12W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D13W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'섬유',
            'page-name':'염색',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D13W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D20W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'철강',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D20W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D21W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'화학 &gt; 화학PU소개',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D21W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D21W02',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'화학 &gt; 합성섬유 원료',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D21W02.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D21W03',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'화학 &gt; 합성수지 제품',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D21W03.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D21W04',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'화학 &gt; 정밀화학 제품',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D21W04.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D21W05',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'화학 &gt; 광산용 화학제품 및 정광',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D21W05.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD20D21W06',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'화학 &gt; 바이오연료 및 기타',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D21W06.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D22W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'LED',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D22W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D23W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'세빛섬',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D23W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD20D24W01',
            'class':'page',
            '1depth':'Business',
            '2depth':'무역',
            'page-name':'광주냉동창고',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'최준현',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD20D24W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'leader',
            'id':'HTNCWKD30D10W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand NOW',
            'page-name':'브랜드 미디어',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D10W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D10W02',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand NOW',
            'page-name':'브랜드 미디어 &gt; 상세페이지',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D10W02.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D11W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand NOW',
            'page-name':'브랜드 TV',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D11W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D12W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand NOW',
            'page-name':'소셜미디어',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D12W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D13W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand NOW',
            'page-name':'브랜드 이미지',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D13W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD30D20W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'ESG NOW',
            'page-name':'ESG 브랜드 개요',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D20W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D21W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'ESG NOW',
            'page-name':'ESG 브랜드 아이덴티티',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D21W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D22W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'ESG NOW',
            'page-name':'ESG 브랜드 아키텍쳐',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D22W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D23W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'ESG NOW',
            'page-name':'ESG 브랜드 스토리',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D23W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D24W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'ESG NOW',
            'page-name':'ESG Story',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D24W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D24W02',
            'class':'page',
            '1depth':'Brand',
            '2depth':'ESG NOW',
            'page-name':'ESG Story &gt; 상세페이지',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D24W02.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD30D30W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand Strategy',
            'page-name':'브랜드 아이덴티티',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D30W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D31W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand Strategy',
            'page-name':'브랜드 체계',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D31W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D32W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand Strategy',
            'page-name':'비주얼 아이덴티티',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D32W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D33W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand Strategy',
            'page-name':'브랜드 스토리',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D33W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D34W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand Strategy',
            'page-name':'ESG 브랜드',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D34W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD30D35W01',
            'class':'page',
            '1depth':'Brand',
            '2depth':'Brand Strategy',
            'page-name':'그룹 브랜드 현황',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'홍수기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD30D35W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'leader',
            'id':'HTNCWKD40D10W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'개요',
            'page-name':'지속가능경영',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-07-25',
            'progress':'100',
            'url':'kor/HTNCWKD40D10W01.html',
            'update':'2023-08-07',
            'memo': 
                '2023-08-07 최준현' + '<br />' +
                '1. 고객 피드백 - 텍스트 변경' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br />' +
                '1. 마크업 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D11W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'개요',
            'page-name':'보고서',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-06-22',
            'end-date':'2023-08-01',
            'progress':'100',
            'url':'kor/HTNCWKD40D11W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 컨텐츠 추가' + '<br />' +
                '2. 고객 피드백 - 텍스트 변경' + '<br />' +
                '3. 고객 피드백 - 이미지 변경' + '<br />' + '<br />' +
                '2023-08-01 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-19 주은소' + '<br>' +
                '1. 키비주얼 이미지 변경' + '<br>' +
                '2. 함수 호출 수정' + '<br>'  + '<br>' +
                '2023-06-22 주은소' + '<br>' +
                '1. 마크업 수정' + '<br>' +
                '2. css 수정' + '<br>' +
                '3. js 수정'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D12W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'개요',
            'page-name':'외부평가',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-06-27',
            'end-date':'2023-06-27',
            'progress':'100',
            'url':'kor/HTNCWKD40D12W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 키비주얼 이미지 변경' + '<br />' +
                '2. 수상내역 간격 변경' + '<br />' + '<br />' +
                '2023-08-08 최준현' + '<br />' +
                '1. 고객 피드백 - 컨텐츠 추가' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-19 주은소' + '<br>' +
                '1. 키비주얼 이미지 변경' + '<br>' +
                '2. 함수 호출 수정' + '<br>'  + '<br>' +
                '2023-06-27 홍수기' + '<br>' +
                '1. 퍼블리싱 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D13W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'개요',
            'page-name':'참여 이니셔티브',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-06-27',
            'end-date':'2023-06-27',
            'progress':'100',
            'url':'kor/HTNCWKD40D13W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-19 주은소' + '<br>' +
                '1. 키비주얼 이미지 변경' + '<br>' +
                '2. 함수 호출 수정' + '<br>'  + '<br>' +
                '2023-06-27 홍수기' + '<br>' +
                '1. 퍼블리싱 완료'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D14W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'개요',
            'page-name':'ESG 정책',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-06-27',
            'end-date':'2023-06-27',
            'progress':'100',
            'url':'kor/HTNCWKD40D14W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 키비주얼 및 컨텐츠 이미지 변경' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-19 홍수기' + '<br>' +
                '1. 퍼블리싱 완료' + '<br>' + '<br>' +
                '2023-06-27 홍수기' + '<br>' +
                '1. 퍼블리싱 완료'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD40D20W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Environmental',
            'page-name':'그린경영',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-08-01',
            'progress':'100',
            'url':'kor/HTNCWKD40D20W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 컨텐츠 이미지 변경' + '<br />' + '<br />' +
                '2023-08-10 홍수기' + '<br />' +
                '1. 이미지 인터랙션 추가' + '<br />' + '<br />' +
                '2023-08-01 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D21W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Environmental',
            'page-name':'기후변화 대응',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D21W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 컨텐츠 이미지 변경' + '<br />' + '<br />' +
                '2023-08-02 최준현' + '<br />' +
                '1. 퍼블리싱 시작' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D22W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Environmental',
            'page-name':'자원순환',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D22W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 키비주얼 및 컨텐츠 이미지 변경' + '<br />' + '<br />' +
                '2023-08-07 최준현' + '<br />' +
                '1. 전체적인 간격 수정' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D23W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Environmental',
            'page-name':'오염저감',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D23W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 키비주얼 이미지 변경' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD40D30W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Social',
            'page-name':'인권경영',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-08-04',
            'progress':'100',
            'url':'kor/HTNCWKD40D30W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 키비주얼 및 9대 원칙 이미지 변경' + '<br />' +
                '2. 인권경영 추진 로드맵 간격 변경' + '<br />'  + '<br />' +
                '2023-08-10 홍수기' + '<br />' +
                '1. 인터랙션 수정' + '<br />'  + '<br />' +
                '2023-08-07 최준현' + '<br />' +
                '1. 간격 수정' + '<br />' + '<br />' +
                '2023-08-04 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D31W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Social',
            'page-name':'상생경영',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-08-04',
            'progress':'100',
            'url':'kor/HTNCWKD40D31W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 고객 피드백 - 키비주얼 이미지 변경' + '<br />' + '<br />' +
                '2023-08-09 최준현' + '<br />' +
                '1. 고객 피드백 - 페이지 수정' + '<br />' + '<br />' +
                '2023-08-07 최준현' + '<br />' +
                '1. 고객 피드백 - 이미지 교체' + '<br />' +
                '2. 테이블 수정' + '<br />' + '<br />' +
                '2023-08-04 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-08-02 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중 (board 템플릿 필요)' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D32W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Social',
            'page-name':'안전보건경영',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-08-04',
            'progress':'100',
            'url':'kor/HTNCWKD40D32W01.html',
            'update':'2023-08-11',
            'memo': 
                '2023-08-11 최준현' + '<br />' +
                '1. 안전보건 추진활동 관련정보 폰트사이즈 및 크기 변경' + '<br />' +
                '2. 안전보건 추진활동 버튼 디자인 변경' + '<br />' + '<br />' +
                '2023-08-10 홍수기' + '<br />' +
                '1. 마크업, 스타일 수정' + '<br />' + '<br />' +
                '2023-08-09 최준현' + '<br />' +
                '1. 고객 피드백 - 페이지 수정 작업 중' + '<br />' + '<br />' +
                '2023-08-04 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-08-02 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중 (팝업 템플릿 필요)' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D33W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Social',
            'page-name':'나눔경영',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-08-02',
            'progress':'100',
            'url':'kor/HTNCWKD40D33W01.html',
            'update':'2023-08-07',
            'memo': 
                '2023-08-07 최준현' + '<br />' +
                '1. 테이블 모바일 레이아웃 수정' + '<br />' + '<br />' +
                '2023-08-02 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-08-01 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D34W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Social',
            'page-name':'정보보안',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-07-28',
            'progress':'100',
            'url':'kor/HTNCWKD40D34W01.html',
            'update':'2023-08-07',
            'memo': 
                '2023-08-07 최준현' + '<br />' +
                '1. 고객 피드백 - 이미지 교체' + '<br />' + '<br />' +
                '2023-08-03 주은소' + '<br />' +
                '1. 2중 다이어그램 제작' + '<br />' +
                '2. css 수정' + '<br />' + '<br />' +
                '2023-08-01 홍수기' + '<br />' +
                '1. 아코디언 수정' + '<br />' + '<br />' +
                '2023-07-28 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD40D40W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 윤리강령',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D40W01.html',
            'update':'2023-08-09',
            'memo': 
                '2023-08-09 최준현' + '<br />' +
                '1. 스타일 수정' + '<br />' +
                '2. 고객 피드백 - 키비주얼 이미지 변경' + '<br />' + '<br />' +
                '2023-08-08 최준현' + '<br />' +
                '1. 고객 피드백 - 페이지 수정' + '<br />' + '<br />' +
                '2023-08-04 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중' + '<br />' + '<br />' +
                '2023-08-01 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D41W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 제보센터',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D41W01.html',
            'update':'2023-08-07',
            'memo': 
                '2023-08-07 최준현' + '<br />' +
                '1. 모바일 레이아웃 수정' + '<br />' + '<br />' +
                '2023-08-04 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D41W02',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 제보센터 &gt; 실명제보',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D41W02.html',
            'update':'2023-08-07',
            'memo': 
                '2023-08-07 최준현' + '<br />' +
                '1. notice line 추가' + '<br />' + '<br />' +
                '2023-08-04 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D41W03',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 제보센터 &gt; 익명제보',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D41W03.html',
            'update':'2023-08-07',
            'memo': 
                '2023-08-07 최준현' + '<br />' +
                '1. notice line 추가' + '<br />' + '<br />' +
                '2023-08-04 홍수기' + '<br />' +
                '1. 퍼블리싱 작업 중' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D41W04',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 제보센터 &gt; 실명제보 접수완료',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D41W04.html',
            'update':'2023-08-04',
            'memo': 
                '2023-08-04 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D41W05',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 제보센터 &gt; 익명제보 접수완료',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D41W05.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D42W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 제보 확인하기',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D42W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D42W02',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'윤리경영 &gt; 제보 확인하기 &gt; 상세정보확인',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'',
            'progress':'100',
            'url':'kor/HTNCWKD40D42W02.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D43W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'Governance',
            'page-name':'리스크 관리',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-07-28',
            'progress':'100',
            'url':'kor/HTNCWKD40D43W01.html',
            'update':'2023-08-09',
            'memo': 
                '2023-08-09 최준현' + '<br />' +
                '1. 고객 피드백 - 페이지 수정' + '<br />' +
                '2. 고객 피드백 - 이미지 교체' + '<br />' + '<br />' +
                '2023-08-07 최준현' + '<br />' +
                '1. 고객 피드백 - 텍스트 문단 스타일 수정' + '<br />' +
                '2. 고객 피드백 - 이미지 교체' + '<br />' + '<br />' +
                '2023-08-03 주은소' + '<br />' +
                '1. 2중 다이어그램 제작' + '<br />' +
                '2. css 수정' + '<br />' + '<br />' +
                '2023-07-28 홍수기' + '<br />' +
                '1. 퍼블리싱 완료' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + 
                '2. 템플릿 작업 중' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'split',
            'id':'HTNCWKD40D50W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'인증서',
            'page-name':'환경',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-07-25',
            'progress':'100',
            'url':'kor/HTNCWKD40D50W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-08-07 최준현' + '<br />' +
                '1. 고객 피드백 - 인증만료일 수정' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + 
                '2. 마크업 완료' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D51W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'인증서',
            'page-name':'안전 보건',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-07-27',
            'progress':'100',
            'url':'kor/HTNCWKD40D51W01.html',
            'update':'2023-08-04',
            'memo': 
                '2023-08-04 주은소' + '<br />' +
                '1. 안전보건 실행과제별 KPI 및 정량목표 popup 컴포넌트 제작' + '<br />' + '<br />' +
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + 
                '2. 마크업 완료' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D52W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'인증서',
            'page-name':'품질',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-07-27',
            'progress':'100',
            'url':'kor/HTNCWKD40D52W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + 
                '2. 마크업 완료' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'',
            'id':'HTNCWKD40D53W01',
            'class':'page',
            '1depth':'Sustainability',
            '2depth':'인증서',
            'page-name':'기타',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'주은소',
            'start-date':'2023-07-25',
            'end-date':'2023-07-27',
            'progress':'100',
            'url':'kor/HTNCWKD40D53W01.html',
            'update':'2023-07-27',
            'memo': 
                '2023-07-27 홍수기' + '<br />' +
                '1. 키비주얼 마크업, 이미지 삽입' + '<br />' + 
                '2. 마크업 완료' + '<br />' + '<br />' +
                '2023-07-25 홍수기' + '<br>' +
                '1. 키비주얼 마크업, 이미지 추가'
        },
        { 
            'appoint':'leader',
            'id':'HTNCWKD03D10W01',
            'class':'page',
            '1depth':'Footer',
            '2depth':'고객문의',
            'page-name':'고객문의',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD03D10W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD03D20W01',
            'class':'page',
            '1depth':'Footer',
            '2depth':'법적고지',
            'page-name':'법적고지',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD03D20W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD03D30W01',
            'class':'page',
            '1depth':'Footer',
            '2depth':'개인정보처리방침',
            'page-name':'개인정보처리방침',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD03D30W01.html',
            'update':'',
            'memo': 
                ''
        },
        { 
            'appoint':'',
            'id':'HTNCWKD03D40W01',
            'class':'page',
            '1depth':'Footer',
            '2depth':'제보센터',
            'page-name':'제보센터',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'김현기',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'kor/HTNCWKD03D40W01.html',
            'update':'',
            'memo': 
                ''
        },
    ],

    // pageList2  = 효성티앤씨(WEB) : 영문(ENG) 목록
    [
        { 
            'appoint':'',
            'id':'HTNCWED00D00W00',
            'class':'page',
            '1depth':'Main',
            '2depth':'',
            'page-name':'효성티엔씨 메인',
            'type':'page',
            'planner-name':'',
            'designer-name':'',
            'publisher-name':'',
            'start-date':'',
            'end-date':'',
            'progress':'0',
            'url':'eng/HTNCWED00D00W00.html',
            'update':'',
            'memo': 
                ''
        },
    ],
];