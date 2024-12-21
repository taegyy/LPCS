document.addEventListener("DOMContentLoaded", function() {
    const medicationList = [
        { symptom: "두통", drugs: [
            { name: "한미플루", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "6주" },
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "탁센", storage: "직사광선을 피하고 기밀용기(1~30도)", expiryDate: "36개월" },
            { name: "비포티프", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
            { name: "이부프로펜", storage: "기밀용기, 직사광선을 피하고 실온(15~30도)", expiryDate: "36개월" }
        ] },
        { symptom: "오한", drugs: [
            { name: "한미플루", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "6주" },
            { name: "탁센", storage: "직사광선을 피하고 기밀용기(1~30도)", expiryDate: "36개월" },
            { name: "비포티프", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
            { name: "튜비스정", storage: "기밀용기, 실온(1~30도)", expiryDate: "24개월" }
        ] },
        { symptom: "발열" || "열", drugs: [
            { name: "한미플루", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "6주" },
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "탁센", storage: "직사광선을 피하고 기밀용기(1~30도)", expiryDate: "36개월" },
            { name: "비포티프", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "근육통", drugs: [
            { name: "한미플루", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "6주" },
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "비포티프", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "인후통"||"목 아픔", drugs: [
            { name: "한미플루", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "6주" },
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "탁센", storage: "직사광선을 피하고 기밀용기(1~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "몸살", drugs: [
            { name: "타이레놀 콜드", storage: "밀폐용기, 실온(1~30도)보관", expiryDate: "36개월" },
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "탁센", storage: "직사광선을 피하고 기밀용기(1~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "안압", drugs: [
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "탁센", storage: "직사광선을 피하고 기밀용기(1~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "설사", drugs: [
            { name: "스멕타", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "포타겔", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "변비", drugs: [
            { name: "둘코락스", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "스피락스", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "구토"||"토", drugs: [
            { name: "라니탄정", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "36개월" },
            { name: "싸이베린", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
            { name: "비포티프", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "발진"||"피부발진", drugs: [
            { name: "비포티프", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "식욕부진", drugs: [
            { name: "비포티프", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
            { name: "튜비스정", storage: "기밀용기, 실온(1~30도)", expiryDate: "24개월" },
            { name: "라니탄정", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "36개월" },
            { name: "싸이베린", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
            { name: "아스피린", storage: "밀폐용기, 1~25도 보관", expiryDate: "36개월" },
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "페리덱스", storage: "차광기밀용기, 실온(1~30도)보관", expiryDate: "36개월" },
            { name: "오라스틱", storage: "차광보관, 실온(1~30도)", expiryDate: "36개월" },
            { name: "오라메디", storage: "기밀용기", expiryDate: "6개월" },
            { name: "이바내", storage: "서늘한 곳(1~35도)에 보관", expiryDate: "36개월" },
            
        ] },
        { symptom: "객담", drugs: [
            { name: "튜비스정", storage: "기밀용기, 실온(1~30도)", expiryDate: "24개월" }
        ] },
        { symptom: "각혈", drugs: [
            { name: "튜비스정", storage: "기밀용기, 실온(1~30도)", expiryDate: "24개월" }
        ] },
        { symptom: "기침", drugs: [
            { name: "튜비스정", storage: "기밀용기, 실온(1~30도)", expiryDate: "24개월" }
        ] },
        { symptom: "미열", drugs: [
            { name: "튜비스정", storage: "기밀용기, 실온(1~30도)", expiryDate: "24개월" }
        ] },
        { symptom: "가려움", drugs: [
            { name: "후시딘", storage: "서늘하고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "에스로반", storage: "실온보관", expiryDate: "6개월" },
            { name: "박트로반", storage: "실온보관", expiryDate: "24개월" },
            { name: "베아로반", storage: "기밀용기,실온보관", expiryDate: "24개월" },
            { name: "아이미루 EX40", storage: "기밀용기,실온보관", expiryDate: "36개월" },
        ] },
        { symptom: "가슴 통증"||"호흡 곤란", drugs: [
            { name: "훼마틴", storage: "서늘하고 건조한 곳에 보관", expiryDate: "6개월" },
            { name: "볼그레", storage: "기밀용기,실온보관", expiryDate: "24개월" },
        ] },
        { symptom: "다래끼", drugs: [
            { name: "프로폴리스", storage: "서늘한 곳에 보관", expiryDate: "24개월" },
        ] },
        { symptom: "눈 가려움", drugs: [
            { name: "아이미루 EX40", storage: "기밀용기,실온보관", expiryDate: "36개월" },
        ] },
        { symptom: "메스꺼움", drugs: [
            { name: "라니탄정", storage: "기밀용기, 실온(1~30도)보관", expiryDate: "36개월" },
            { name: "싸이베린", storage: "밀폐용기, 실온(15~30도)", expiryDate: "36개월" },
        ] },
        { symptom: "배아픔"||"복통", drugs: [
            { name: "스멕타", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "포타겔", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "재채기", drugs: [
            { name: "지르텍", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "오트리빈", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "코마키텐", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "클라리틴", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "생리"||"생리통", drugs: [
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "이지엔", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "탁센", storage: "기밀용기, 실온보관", expiryDate: "36개월" },
            { name: "그날엔", storage: "실온보관", expiryDate: "36개월" },
        ] },
        { symptom: "코막힘", drugs: [
            { name: "노즈그린", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "오트리빈", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "24개월" },
            { name: "코마키텐", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "24개월" },
            { name: "콘택골드", storage: "실온보관", expiryDate: "24개월" },
        ] },
        { symptom: "콧물", drugs: [
            { name: "지르텍", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "노즈그린", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "콘택골드", storage: "실온보관", expiryDate: "24개월" },
            { name: "클라리틴", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "치통", drugs: [
            { name: "이가탄", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
        ] },
        { symptom: "두드러기", drugs: [
            { name: "지르텍", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "클라리틴", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "목 불편", drugs: [
            { name: "코마키텐", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "24개월" },
            { name: "오트리빈", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "스트랩실", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "모가프렌", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "24개월" },
            { name: "미놀F", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "목이 뻣뻣함", drugs: [
            { name: "아스피린", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "24개월" },
            { name: "아세트아미노펜", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "목 잠김", drugs: [
            { name: "스트랩실", storage: "실온보관", expiryDate: "36개월" },
            { name: "모가프렌", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "24개월" },
            { name: "미놀F", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "피부 알레르기", drugs: [
            { name: "항히스타민제", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
        ] },
        { symptom: "피부 염증", drugs: [
            { name: "에스트로반 연고", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "24개월" },
        ] },
        { symptom: "허리아픔", drugs: [
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "이지엔", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "탁센", storage: "기밀용기, 실온보관", expiryDate: "36개월" },
            { name: "그날엔", storage: "실온보관", expiryDate: "36개월" },
        ] },
        { symptom: "요통", drugs: [
            { name: "타이레놀", storage: "그늘지고 건조한 곳에 보관", expiryDate: "36개월" },
            { name: "이지엔", storage: "기밀용기, 실온보관(1~30℃)", expiryDate: "36개월" },
            { name: "탁센", storage: "기밀용기, 실온보관", expiryDate: "36개월" },
            { name: "그날엔", storage: "실온보관", expiryDate: "36개월" },
        ] },
    ];

    // 검색 버튼 클릭 시 처리
    document.getElementById('search-btn').addEventListener('click', function() {
        handleSearch();
    });

    // 엔터키를 눌렀을 때도 검색이 동작하도록 처리
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const inputSymptom = document.getElementById('search-input').value.toLowerCase().trim();
        console.log(inputSymptom); // 입력값이 잘 전달되는지 확인
        const resultsContainer = document.getElementById('drug-info');
        resultsContainer.innerHTML = '';  // 기존 결과 초기화
        const loadingMessage = document.querySelector('.loading');
        loadingMessage.style.display = 'block'; // 로딩 메시지 표시

        // 입력 값이 없을 경우
        if (!inputSymptom) {
            loadingMessage.style.display = 'none';
            alert("증상을 입력해주세요.");
            return;
        }

        // 입력된 증상과 대소문자를 구분하지 않고 비교하기 위해 모든 증상을 소문자로 변환
        const matchingMedications = medicationList.filter(item => item.symptom.toLowerCase().includes(inputSymptom));
        loadingMessage.style.display = 'none'; // 로딩 메시지 숨기기

        if (matchingMedications.length > 0) {
            matchingMedications.forEach(item => {
                const drugItem = document.createElement('div');
                drugItem.classList.add('drug-item');

                // 테이블 시작
                let tableHTML = `<h3>${item.symptom} 관련 약품:</h3>`;
                tableHTML += `<table class="drug-table">
                    <thead>
                        <tr>
                            <th>약물 이름</th>
                            <th>보관 방법</th>
                            <th>유효 기간</th>
                        </tr>
                    </thead>
                    <tbody>`;

                // 약물 정보 추가
                item.drugs.forEach(drug => {
                    tableHTML += `<tr>
                        <td>${drug.name}</td>
                        <td>${drug.storage}</td>
                        <td>${drug.expiryDate}</td>
                    </tr>`;
                });

                tableHTML += `</tbody></table>`;

                drugItem.innerHTML = tableHTML;
                resultsContainer.appendChild(drugItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>검색 증상에 대한 약품이 없습니다.</p>';
        }
    }
});
