// 상품 데이터, [] : 베열, {} : 객체
const products = [
    {
        id: 1,
        name: "레트로 시계",
        description: "클래식한 레트로 디자인의 아날로그 시계.",        
        price: "₩10,000",
        imageUrl: "https://picsum.photos/id/1/500/500"
    },
    {
        id: 2,
        name: "커피 머그컵",
        description: "아침의 시작, 따뜻한 커피와 함께.",
        price: "₩8,000",
        imageUrl: "https://picsum.photos/id/20/500/500"
    },
    {
        id: 3,
        name: "트래블 백팩",
        description: "편안한 여행을 위한 필수 백팩.",
        price: "₩25,000",
        imageUrl: "https://picsum.photos/id/30/500/500"
    },
    {
        id: 4,
        name: "스타일리시 모자",
        description: "캐주얼한 룩을 완성하는 모자.",
        price: "₩12,000",
        imageUrl: "https://picsum.photos/id/40/500/500"
    },
    {
        id: 5,
        name: "가죽 지갑",
        description: "고급스러운 디자인의 가죽 지갑.",
        price: "₩18,000",
        imageUrl: "https://picsum.photos/id/50/500/500"
    },
    {
        id: 6,
        name: "스포츠 운동화",
        description: "편안함을 자랑하는 스포츠 운동화.",
        price: "₩30,000",
        imageUrl: "https://picsum.photos/id/60/500/500"
    },
    {
        id: 7,
        name: "데님 자켓",
        description: "모든 계절에 어울리는 데님 자켓.",
        price: "₩40,000",
        imageUrl: "https://picsum.photos/id/70/500/500"
    },
    {
        id: 8,
        name: "가죽 부츠",
        description: "고급 가죽으로 만든 부츠.",
        price: "₩50,000",
        imageUrl: "https://picsum.photos/id/80/500/500"
    },
    {
        id: 9,
        name: "메탈 선글라스",
        description: "고급스러운 메탈 선글라스.",
        price: "₩15,000",
        imageUrl: "https://picsum.photos/id/90/500/500"
    }
];


// URL에서 상품 ID를 가져온다.
const productId = window.location.hash.substr(1);

// 상품 데이터에서 해당 상품을 찾는다.
const product = products.find(p => p.id == productId);

if (product) {
    // 상품 데이터를 기반으로 페이지를 업데이트한다.
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-image").src = product.imageUrl;
} else {
    // 상품이 없는 경우 오류 메시지를 표시한다.
    alert("상품을 찾을 수 없습니다.");
}
