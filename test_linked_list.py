import unittest
from linked_list import LinkedList

class TestLinkedList(unittest.TestCase):
    def setUp(self):
        self.ll = LinkedList()

    def test_reverse_empty_list(self):
        """Reversing an empty list should keep it empty."""
        self.ll.reverse()
        self.assertEqual(self.ll.to_list(), [])

    def test_reverse_single_element(self):
        """Reversing a single-element list should be unchanged."""
        self.ll.append(42)
        self.ll.reverse()
        self.assertEqual(self.ll.to_list(), [42])

    def test_reverse_two_elements(self):
        """Reversing two elements should swap them."""
        self.ll.append(1)
        self.ll.append(2)
        self.ll.reverse()
        self.assertEqual(self.ll.to_list(), [2, 1])

    def test_reverse_multiple_elements(self):
        """Reversing multiple elements should return the reversed order."""
        for i in range(1, 6):
            self.ll.append(i)
        self.ll.reverse()
        self.assertEqual(self.ll.to_list(), [5, 4, 3, 2, 1])

    def test_reverse_preserves_values(self):
        """Reversing should not change the values, only their order."""
        for i in [10, 20, 30, 40]:
            self.ll.append(i)
        original_values = set(self.ll.to_list())
        self.ll.reverse()
        reversed_values = set(self.ll.to_list())
        self.assertEqual(original_values, reversed_values)

if __name__ == "__main__":
    unittest.main()