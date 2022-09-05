def quickSort(lista):
    if len(lista)<= 1:
        return lista
    ##Recursive case
    pivote = lista.pop()
    lista1= []
    lista2= []

    for e in lista:
        if e <= pivote:
            lista1.append(e)
        else:
            lista2.append(e)

    lista1 = quickSort(lista1)
    lista2 = quickSort(lista2)

    return lista1 + [pivote] + lista2

lista = [5, 8, 6, 1, 3, 7, 4, 6, 9]

print(lista)
print(quickSort(lista))