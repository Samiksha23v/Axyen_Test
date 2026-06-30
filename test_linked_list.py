#!/usr/bin/env python3
"""Unit tests for linked list reversal functionality."""

import unittest
from linked_list import LinkedList, Node


class TestNode(unittest.TestCase):
    """Test cases for the Node class."""
    
    def test_node_creation(self):
        """Test that a node is created correctly."""
        node = Node(5)
        self.assertEqual(node.data, 5)
        self.assertIsNone(node.next)
    
    def test_node_linking(self):
        """Test that nodes can be linked together."""
        node1 = Node(1)
        node2 = Node(2)
        node1.next = node2
        self.assertEqual(node1.next, node2)
        self.assertEqual(node1.next.data, 2)


class TestLinkedList(unittest.TestCase):
    """Test cases for the LinkedList class."""
    
    def setUp(self):
        """Set up test fixtures."""
        self.ll = LinkedList()
    
    def test_empty_list(self):
        """Test that a new list is empty."""
        self.assertTrue(self.ll.is_empty())
        self.assertEqual(len(self.ll), 0)
        self.assertEqual(self.ll.display(), [])
    
    def test_append(self):
        """Test appending elements to the list."""
        self.ll.append(1)
        self.ll.append(2)
        self.ll.append(3)
        self.assertEqual(self.ll.display(), [1, 2, 3])
        self.assertEqual(len(self.ll), 3)
    
    def test_prepend(self):
        """Test prepending elements to the list."""
        self.ll.prepend(1)
        self.ll.prepend(2)
        self.ll.prepend(3)
        self.assertEqual(self.ll.display(), [3, 2, 1])
    
    def test_reverse_iterative(self):
        """Test iterative reverse method."""
        self.ll.append(1)
        self.ll.append(2)
        self.ll.append(3)
        self.ll.append(4)
        self.ll.reverse()
        self.assertEqual(self.ll.display(), [4, 3, 2, 1])
    
    def test_reverse_recursive(self):
        """Test recursive reverse method."""
        self.ll.append(1)
        self.ll.append(2)
        self.ll.append(3)
        self.ll.append(4)
        self.ll.reverse_recursive()
        self.assertEqual(self.ll.display(), [4, 3, 2, 1])
    
    def test_reverse_single_element(self):
        """Test reversing a list with a single element."""
        self.ll.append(42)
        self.ll.reverse()
        self.assertEqual(self.ll.display(), [42])
    
    def test_reverse_empty_list(self):
        """Test reversing an empty list."""
        self.ll.reverse()
        self.assertEqual(self.ll.display(), [])
        self.assertTrue(self.ll.is_empty())
    
    def test_reverse_twice(self):
        """Test that reversing twice returns to original order."""
        original = [1, 2, 3, 4, 5]
        for item in original:
            self.ll.append(item)
        
        self.ll.reverse()
        self.ll.reverse()
        self.assertEqual(self.ll.display(), original)
    
    def test_reverse_with_strings(self):
        """Test reversing a list with string data."""
        words = ['hello', 'world', 'python']
        for word in words:
            self.ll.append(word)
        
        self.ll.reverse()
        self.assertEqual(self.ll.display(), ['python', 'world', 'hello'])
    
    def test_str_representation(self):
        """Test string representation of the list."""
        self.ll.append(1)
        self.ll.append(2)
        self.ll.append(3)
        self.assertEqual(str(self.ll), '1 -> 2 -> 3')
    
    def test_str_empty_list(self):
        """Test string representation of empty list."""
        self.assertEqual(str(self.ll), 'Empty List')


class TestReverseComparison(unittest.TestCase):
    """Test that both reverse methods produce the same results."""
    
    def test_iterative_vs_recursive(self):
        """Test that iterative and recursive methods give same result."""
        ll1 = LinkedList()
        ll2 = LinkedList()
        
        test_data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        for item in test_data:
            ll1.append(item)
            ll2.append(item)
        
        ll1.reverse()
        ll2.reverse_recursive()
        
        self.assertEqual(ll1.display(), ll2.display())


if __name__ == '__main__':
    unittest.main()
