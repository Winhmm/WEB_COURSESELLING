/* file: writing-logic.js */

const container = document.getElementById('writing-container');
const modal = document.getElementById('essay-modal');
const closeBtn = document.querySelector('.close-btn');

// Hàm hiển thị danh sách bài viết
function renderPosts(filterType = 'All') {
    container.innerHTML = ''; // Xóa nội dung cũ

    const filteredPosts = filterType === 'All' 
        ? writingPosts 
        : writingPosts.filter(post => post.type === filterType);

    filteredPosts.forEach(post => {
        const cardHTML = `
            <div class="post-card" onclick="openModal(${post.id})">
                <div class="post-header">
                    <div>
                        <h3 class="post-title">${post.title}</h3>
                        <p class="post-date">${post.date} | Band: ${post.band}</p>
                    </div>
                    <span class="post-badge">${post.type}</span>
                </div>
                <div class="post-content">
                    <p><strong>Question:</strong> ${post.question.substring(0, 100)}...</p>
                </div>
                
                <span class="read-more">Read More Detail</span>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Hàm mở Modal xem chi tiết
function openModal(id) {
    const post = writingPosts.find(p => p.id === id);
    if (!post) return;

    document.getElementById('modal-title').innerText = post.title;
    document.getElementById('modal-badge').innerText = post.type;
    document.getElementById('modal-band').innerText = `Target Band: ${post.band}`;
    document.getElementById('modal-question').innerText = post.question;
    document.getElementById('modal-answer').innerHTML = post.answer;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang chính
}

// Đóng Modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Chạy lần đầu
renderPosts();