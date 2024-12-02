print("Hello, World")
a = 1
b = "H"
c = True
d = None
list1 = [8,2.3,[-4,5],["apple","bannana"]]
tuple1 = ((a,b),("lion","Tiger"))
dict1 = {"name":b,"age":a}
print(list1,tuple1,dict1)
# Arithmetics Oparetors ( +, -, *, /, %, //, **, %%)
e = input("Enter your Name: ")
# var1 = int(input())
# var2 = float(input())
f = len(e)
print(e[0:f:1])
for i in e:
    print(i)
# String Methods
str1 = "aBcdEf GHIj"
print(str1.upper())
print(str1.lower())
print(str1.strip())
print(str1.replace("aB","GG"))
print(str1.capitalize())
print(str1.capitalize())
print(str1.center(50))
print(str1.count("a"))
print(str1.endswith("!!"))