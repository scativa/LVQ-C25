from cgi import test
import pymongo
from pymongo.server_api import ServerApi

username = "ppca_cnea"
password = "gadolineo1982"
cluster = "cluster0.4r99gz4"
# mongoURL = f"mongodb+srv://{username}:{password}@cluster0.yu4pr.mongodb.net/?retryWrites=true&w=majority"
# mongoURL = "mongodb+srv://test:12345@cluster0.7myyb.mongodb.net/?retryWrites=true&w=majority"

mongoURL = f"mongodb+srv://{username}:{password}@{cluster}.mongodb.net/?retryWrites=true&w=majority"


client = pymongo.MongoClient(mongoURL, 
    server_api=ServerApi('1'),
#    serverSelectionTimeoutMS=1
    )

client.close()

print(mongoURL)

db = client['database']
coll = db['collection']
print(coll)

test = client.test
# print(test)
