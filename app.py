
import pandas
import time
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import classification_report,confusion_matrix


all_data = pandas.read_csv('dataset.csv')
all_features = all_data.drop('label', axis=1)
all_lables = all_data['label']


train_features, test_features, train_labels, test_labels = train_test_split(all_features, all_lables, stratify = all_lables, train_size = 0.85, random_state = 4)



mlp = MLPClassifier(hidden_layer_sizes=(15), learning_rate_init=0.01,  activation='relu', random_state = 4)
start = time.time()
mlp.fit(train_features, train_labels)
end = time.time()

print('Training completed in ', end-start, ' s')
# predictions = mlp.predict(test_features)
# print(classification_report(test_labels, predictions))

user = 'N'
while(user != 'Y'):
    r = input('Enter r: ')
    g = input('Enter g: ')
    b = input('Enter b: ')

    rgb = [[r, g, b]]
    df = pandas.DataFrame(rgb, columns = ['r', 'g', 'b'])
    start = time.time()
    result = mlp.predict(df)
    end = time.time()
    print(result)
    print('Predicted in ', end-start, ' s')

    user = input("Exit? (Y/N)")
