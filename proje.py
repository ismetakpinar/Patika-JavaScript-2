original_list = [[1,'a',['cat'],2],[[[3]],'dog'],4,5]

def flatten_list(lst):
    flattened_list = []
    for i in lst:
        if type(i) == list:
            flattened_list.extend(flatten_list(i))
        else:
            flattened_list.append(i)
    return flattened_list

flattened_list = flatten_list(original_list)
print(flattened_list)





list = [[1, 2], [3, 4], [5, 6, 7]]
def Ters(list): 
    list.reverse() 
    return list 
print(Ters(list))


