let csset = require('./check_sset.js')
let trie = require('../../src/sset/trie.js')

describe('Test Trie', function () {
    let Trie = trie.Trie

    describe('empty trie and empty key:', function () {
        csset.check_empty_key_0(new Trie())
    })
    describe('non-empty trie and empty key:', function () {
        csset.check_empty_key_1(new Trie())
    })
    describe('single letters, different values:', function () {
        csset.check_single_letters(new Trie())
    })
    describe('single digits, different values', function () {
        csset.check_single_digits(new Trie())
    })
    describe('simple chain', function () {
        csset.check_simple_chain(new Trie(), 10)
    })
    describe('test words 0', function () {
        csset.check_words_0(new Trie())
    })
    describe('test words 1', function () {
        csset.check_words_1(new Trie())
    })
    describe('test words 2', function () {
        csset.check_words_2(new Trie())
    })
    describe('test words 3', function () {
        csset.check_words_3(new Trie())
    })
    describe('test words 4', function () {
        csset.check_words_4(new Trie())
    })
    describe('test random binary words', function () {
        for (let times = 0; times < 10; ++times) {
            csset.check_random_words(new Trie(), times, 100, 5, 'ab')
        }
    })
    describe('test random unary words', function () {
        for (let times = 0; times < 10; ++times) {
            csset.check_random_words(new Trie(), times, 100, 5, 'a')
        }
    })
    describe('test random words', function () {
        for (let times = 0; times < 100; ++times) {
            csset.check_random_words(new Trie(), times, 100, 100, 'abcdefgh')
        }
    })
    describe('test gcp with empty key 0', function () {
        csset.check_gcp_empty_0(new Trie())
    })
    describe('test gcp with empty key 1', function () {
        csset.check_gcp_empty_1(new Trie())
    })
    describe('test gcp 0', function () {
        csset.check_gcp_0(new Trie())
    })
    describe('test gcp 1', function () {
        csset.check_gcp_1(new Trie())
    })
    describe('test gcp 2', function () {
        csset.check_gcp_2(new Trie())
    })
    describe('test gcp 3', function () {
        csset.check_gcp_3(new Trie())
    })
    describe('test startswith empty 0', function () {
        csset.check_startswith_empty_0(new Trie())
    })
    describe('test startswith empty 1', function () {
        csset.check_startswith_empty_1(new Trie())
    })
    describe('test startswith 0', function () {
        csset.check_startswith_0(new Trie())
    })
    describe('test startswith 1', function () {
        csset.check_startswith_1(new Trie())
    })
    describe('test startswith 2', function () {
        csset.check_startswith_2(new Trie())
    })
    describe('test startswith 3', function () {
        csset.check_startswith_3(new Trie())
    })
})
