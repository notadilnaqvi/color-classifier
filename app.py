import pandas
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import classification_report,confusion_matrix


all_data = pandas.read_csv('dataset.csv')
all_features = all_data.drop('label', axis=1)
all_lables = all_data['label']

X_train, X_test, y_train, y_test = train_test_split(all_features, all_lables, stratify = all_lables, train_size = 0.80)

scaler = StandardScaler()
scaler.fit(X_train)

StandardScaler(copy=True, with_mean=True, with_std=True)

X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)

mlp = MLPClassifier(hidden_layer_sizes=(9,9,9),max_iter=5000)
mlp.fit(X_train,y_train)
predictions = mlp.predict(X_test)

print(confusion_matrix(y_test,predictions))
print(classification_report(y_test,predictions))
# print(all_lables.shape)
# top = all_lables.head()
# print(top)
