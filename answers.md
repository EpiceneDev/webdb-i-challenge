
- find all customers with postal code 1010. Returns 3 records.

    SELECT * FROM [Customers] where postalcode=1010;

- find the phone number for the supplier with the id 11. Should be (010) 9984510.

    SELECT phone FROM Suppliers WHERE supplierid=11;

- list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.

    select * from artist order by Name limit 10;

- find all customers that live in London, Madrid, or Brazil. Returns 18 records.

    SELECT * FROM Customers
    WHERE Country IN ('London', 'Madrid', 'Brazil');

- add a customer record for _"The Shire"_, the contact name is _"Bilbo Baggins"_ the address is _"1 Hobbit-Hole"_ in _"Bag End"_, postal code _"111"_ and the country is _"Middle Earth"_.

    insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
    values("The Shire", "Bilbo Baggins", "1 Hobbit-Hole", "Bag End", "111", "Middle Earth");

- update _Bilbo Baggins_ record so that the postal code changes to _"11122"_.

    update Customers
    set PostalCode = '11122'
    where ContactName = 'Bilbo Baggins’;
