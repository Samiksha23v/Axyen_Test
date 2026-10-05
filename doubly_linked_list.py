"""A doubly linked list implementation with the usual insert, delete and
 traversal helpers.

Each node keeps links to both its predecessor and its successor, which makes
insertion and removal O(1) once the node is known and allows traversal in both
directions.
"""

from typing import Any, Iterator, Optional


class Node:
    """A single node holding a value plus links to its neighbours."""

    __slots__ = ("value", "prev", "next")

    def __init__(self, value: Any, prev: "Optional[Node]" = None,
                 next: "Optional[Node]" = None) -> None:
        self.value = value
        self.prev = prev
        self.next = next

    def __repr__(self) -> str:
        return f"Node({self.value!r})"


class DoublyLinkedList:
    """A doubly linked list with O(1) insertion and removal at both ends."""

    def __init__(self, values: Optional[Iterator[Any]] = None) -> None:
        self.head: Optional[Node] = None
        self.tail: Optional[Node] = None
        self._size = 0
        if values is not None:
            for value in values:
                self.append(value)

    # ------------------------------------------------------------- basics
    def __len__(self) -> int:
        return self._size

    @property
    def is_empty(self) -> bool:
        return self._size == 0

    def __iter__(self) -> Iterator[Any]:
        current = self.head
        while current is not None:
            yield current.value
            current = current.next

    def __reversed__(self) -> Iterator[Any]:
        current = self.tail
        while current is not None:
            yield current.value
            current = current.prev

    def __contains__(self, value: Any) -> bool:
        return self.find(value) is not None

    def __getitem__(self, index: int) -> Any:
        return self._node_at(index).value

    def __repr__(self) -> str:
        return f"DoublyLinkedList({self.to_list()!r})"

    # ------------------------------------------------------------ insert
    def append(self, value: Any) -> Node:
        """Add *value* at the end of the list."""
        node = Node(value, prev=self.tail)
        if self.tail is None:
            self.head = self.tail = node
        else:
            self.tail.next = node
            self.tail = node
        self._size += 1
        return node

    def prepend(self, value: Any) -> Node:
        """Add *value* at the front of the list."""
        node = Node(value, next=self.head)
        if self.head is None:
            self.head = self.tail = node
        else:
            self.head.prev = node
            self.head = node
        self._size += 1
        return node

    def insert_at(self, index: int, value: Any) -> Node:
        """Insert *value* at *index* (negative indexes count from the end)."""
        if index < 0:
            index += self._size
        if index < 0 or index > self._size:
            raise IndexError("index out of range")
        if index == 0:
            return self.prepend(value)
        if index == self._size:
            return self.append(value)

        current = self._node_at(index)
        node = Node(value, prev=current.prev, next=current)
        current.prev.next = node  # type: ignore[union-attr]
        current.prev = node
        self._size += 1
        return node

    # ------------------------------------------------------------ remove
    def remove_node(self, node: Node) -> Any:
        """Detach *node* from the list and return its value."""
        if node.prev is not None:
            node.prev.next = node.next
        else:
            self.head = node.next

        if node.next is not None:
            node.next.prev = node.prev
        else:
            self.tail = node.prev

        node.prev = node.next = None
        self._size -= 1
        return node.value

    def remove(self, value: Any) -> bool:
        """Remove the first occurrence of *value*. Return True if found."""
        node = self.find(value)
        if node is None:
            return False
        self.remove_node(node)
        return True

    def pop(self) -> Any:
        """Remove and return the last value."""
        if self.tail is None:
            raise IndexError("pop from empty list")
        return self.remove_node(self.tail)

    def popleft(self) -> Any:
        """Remove and return the first value."""
        if self.head is None:
            raise IndexError("pop from empty list")
        return self.remove_node(self.head)

    def clear(self) -> None:
        """Remove every node from the list."""
        current = self.head
        while current is not None:
            nxt = current.next
            current.prev = current.next = None
            current = nxt
        self.head = self.tail = None
        self._size = 0

    # ------------------------------------------------------------- lookup
    def find(self, value: Any) -> Optional[Node]:
        """Return the first node whose value equals *value*, else None."""
        current = self.head
        while current is not None:
            if current.value == value:
                return current
            current = current.next
        return None

    def _node_at(self, index: int) -> Node:
        """Return the node at *index*, walking from the nearer end."""
        if index < 0:
            index += self._size
        if index < 0 or index >= self._size:
            raise IndexError("index out of range")

        if index < self._size // 2:
            current = self.head
            for _ in range(index):
                current = current.next
        else:
            current = self.tail
            for _ in range(self._size - 1 - index):
                current = current.prev
        return current  # type: ignore[return-value]

    def to_list(self) -> list:
        """Return the values as a plain Python list (head to tail)."""
        return list(self)

    def reverse(self) -> None:
        """Reverse the list in place by swapping each node's links."""
        current = self.head
        while current is not None:
            current.prev, current.next = current.next, current.prev
            current = current.prev
        self.head, self.tail = self.tail, self.head


if __name__ == "__main__":
    dll = DoublyLinkedList([2, 3, 4])
    dll.prepend(1)
    dll.append(5)
    dll.insert_at(2, 99)
    print(dll)                 # DoublyLinkedList([1, 2, 99, 3, 4, 5])
    dll.remove(99)
    print(list(reversed(dll)))  # [5, 4, 3, 2, 1]
    print(dll.pop(), dll.popleft())  # 5 1
    print(dll.to_list(), len(dll))   # [2, 3, 4] 3
