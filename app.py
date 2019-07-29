import pandas
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import classification_report,confusion_matrix


all_data = pandas.read_csv('dataset.csv')
all_features = all_data.drop('label', axis=1)
all_lables = all_data['label']

# X_train, X_test, y_train, y_test
train_features, test_features, train_labels, test_labels = train_test_split(all_features, all_lables, stratify = all_lables, train_size = 0.75, )
# print(type(X_test))

# scaler = StandardScaler()
# scaler.fit(X_train)
#
# StandardScaler(copy=True, with_mean=True, with_std=True)
#
# X_train = scaler.transform(X_train)
# X_test = scaler.transform(X_test)
# rgb = [[145, 98, 3], [100, 100, 100]]
# df = pandas.DataFrame(rgb, columns = ['r', 'g', 'b'])
mlp = MLPClassifier(hidden_layer_sizes=(5), max_iter=500)
mlp.fit(train_features, train_labels)
# score = mlp.score(test_features, test_labels)
# print(score)
predictions = mlp.predict(test_features)
# print(predictions)



print(confusion_matrix(test_labels,predictions))
print(classification_report(test_labels,predictions))


# print(all_lables.shape)
# top = all_lables.head()
# print(top)
