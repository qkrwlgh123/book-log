const router = require('express').Router();
const { book, review } = require('../controllers');

// 도서 목록
router.get('/', book.list);

// 도서 감상 목록
router.get('/:book_id/review', book.reviews);

// 감상 작성
router.post('/new', review.new);

// 감상 수정
router.post('/edit', review.edit);

// 감상 삭제
router.post('/remove/:review_id', review.remove);

module.exports = router;
