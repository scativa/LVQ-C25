from cgi import test
import pymongo
from pymongo.server_api import ServerApi

# para probar si el puerto está abierto
# curl http://portquiz.net:27017


username = "ppca_cnea"
password = "gadolineo1982"
cluster = "cluster0.4r99gz4"
# mongoURL = f"mongodb+srv://{username}:{password}@cluster0.yu4pr.mongodb.net/?retryWrites=true&w=majority"
# mongoURL = "mongodb+srv://test:12345@cluster0.7myyb.mongodb.net/?retryWrites=true&w=majority"

mongoURL = f"mongodb+srv://{username}:{password}@{cluster}.mongodb.net/?retryWrites=true&w=majority"

def mongodb_connect(mongoURL):
    try:
        client = pymongo.MongoClient(mongoURL,
        server_api=ServerApi('1'),
        serverSelectionTimeoutMS=100
        )

        client.server_info() # force connection on a request as the
                            # connect=True parameter of MongoClient seems
                            # to be useless here 

        return client
    except pymongo.errors.ConnectionFailure as err:
         print("Failed to connect to server {}".format(mongoURL))
         print(err)

    except pymongo.errors.ServerSelectionTimeoutError as err:
        # do whatever you need
        print(err)         

if __name__ == "__main__":
    client = mongodb_connect(mongoURL)

    client.close()

    print(mongoURL)

    db = client['database']
    coll = db['collection']
    print(coll)

    test = client.test
    # print(test)
