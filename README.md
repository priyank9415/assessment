taske clone of repository and switch to master branch.

run-> npm i/install ----to install all the dependency.


run-> npm run dev  ----to start the project.

Note - please make sure to import dump file of database. 

Required APIs

API to get book available date ---- 
curl --location 'http://localhost:3000/getReturnDate?book_name=yowza%20ah%20artistic' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json'




API to get rent of the books ----

curl --location 'http://localhost:3000/get_Price?book_name=drat%20loftily%20within&customer_name=Omar%20Kuhlman%20Jr.' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json'
