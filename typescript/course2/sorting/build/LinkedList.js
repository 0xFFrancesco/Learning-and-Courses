"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = data;
        this._next = null;
    }
    Object.defineProperty(ListNode.prototype, "value", {
        get: function () {
            return this.data;
        },
        set: function (value) {
            this.data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (next) {
            this._next = next;
        },
        enumerable: false,
        configurable: true
    });
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var tail = this.head;
            while (tail.next) {
                length++;
                tail = tail.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        var counter = 0;
        var tail = this.head;
        while (tail) {
            if (counter === index) {
                return tail;
            }
            counter++;
            tail = tail.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (i, j) {
        if (!this.head) {
            throw new Error("List is empty");
        }
        return this.at(i).value > this.at(j).value;
    };
    LinkedList.prototype.swap = function (i, j) {
        var temp = this.at(j).value;
        this.at(j).value = this.at(i).value;
        this.at(i).value = temp;
    };
    LinkedList.prototype.getData = function () {
        var data = [];
        var tail = this.head;
        while (tail) {
            data.push(tail.value);
            tail = tail.next;
        }
        return data;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
