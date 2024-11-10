


# For minikube or kubernetes tutorial

## Assumptions
- Assuming you have basic understanding on docker, kubernetes cluster (holds everything), pods (where docker contianer is), nodes (the server, or virtual machine or ec2 aws)
- Assuming you are watching this video because you already have idea of what is kubernetes vs minikube. So let's roll.


## STEPS

- Install minikube https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download
- Clone simple flask app https://github.com/CodesInTheShell/flask_vue_monolith


- Start minikube cluster <br>
  `minikube start`

- We need to run docker commands inside minikube and not on host computer (unless you want to pull image from container registry)<br>
  `eval $(minikube docker-env)`

- Sneak peek on current docker images (starting with kube related images)<br>
`docker image ls`

- Build our flask app image<br>
`docker build -t python-flask:latest .`

- Deploy the container<br>
`minikube kubectl apply -f deployment.yaml`

- Start the service to expose our app<br>
`kubectl apply -f service.yaml`

- Check our app is up and running<br>
`kubectl get pods`
`kubectl get svc`

- Actual exposing the app by minikube<br>
`minikube service python-flask-service --url`

- Clean up
`kubectl delete all --all`


## Summary of steps
- Create a minikube cluster
- Build an image
- deploy the container with deployment.yaml
- create a service with service.yaml
- expose the minikube url
- Clean up
