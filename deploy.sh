docker build -t romanbeloborodov/gpclient:latest -t romanbeloborodov/gpclient:$SHA -f ./client/Dockerfile ./client
docker build -t romanbeloborodov/gpserver:latest -t romanbeloborodov/gpserver:$SHA -f ./server/Dockerfile ./server

docker push romanbeloborodov/gpclient:latest
docker push romanbeloborodov/gpserver:latest

docker push romanbeloborodov/gpclient:$SHA
docker push romanbeloborodov/gpserver:$SHA

kubectl apply -f k8s
kubectl set image deployments/server-deployment server=romanbeloborodov/gpserver:$SHA
kubectl set image deployments/client-deployment client=romanbeloborodov/gpclient:$SHA
