
# Docker:

### Under the hood
- uses a linux kernel VM;
    - uses namespaces (to isolate the disk);
    - uses cgroups (to isolate resources).

### Docker Images
- Dockerfile to define the steps to create an image;
- Uses a temporary image and container for every step till the final image creation;
- A docker image is: a disk snapshot + an initial command.

### Basic CLI commands
- `docker build [-f FILENAME]`: build an image;
    - `-f FILENAME`: specify a specific Dockerfile (ex. `Dockerfile.dev`).
- `docker run IMAGE_ID`: run an image;
- `docker exec [-it] IMAGE_ID`: to execute a command in an already running container (ex. open a new shell);
    - `-it` maps stdin/stdout/stderr to the host console to make the container output it interactive and well formatted.
- `docker ps`: list all the running containers.

### Logs
- You can retrieve the logs of a running background container.

### Ports
- You can map with ports of host system to docker container.
- Example: `docker run -p 3000:8080`.

### Docker compose
- Docker-compose run multiple images at once and create a virtual network for them to communicate.
- You can reference the networked container with the label you provided in the `docker-compose.yml` file;
- In the `.yml` file you can specify the images, the ports, the volumes, the env variables, etc.

### Volumes
- Docker volumes allow you to access files on the host machine (as a reference) so that you can develop without rebuilding an image on every single change;
- Example:  `docker run -p 3000:8080  -v $(pwd):/app IMAGE_ID`;
- It overwrites everything in the target folder, unless you specify a previous folder without a target, in that case it will assume that that folder needs to be kept (ex. `-v /app/node_modules $(pws):/app` will maintain the app /app/node_modules intact in the container).

### Multi-phase dockerfile
- Use multiple base images (each defines a phase);
- You can then take output files from previous phases;
- When it finishes all images gets destroyed expect for the last, which defines the result.



# Kubernetes:

### Under the hood
- Needs a VM adapter to be installed separately (ex. VirtualBox);
- Expects all the images to be already build (so not as docker-compose than can run builds);
- Networking needs to be set up manually (so not as docker-compose that automatically sets up the network);
- The whole process is to tell the master node the desired configuration so that it can recreate it. 

### Nodes
- Is a physical computer or a VM;
- A copy of Docker is running in every node; 
- A node can contain one or more containers;
- CLI commands using `kubectl`.

### Cluster
- Sum of every node plus the master node;
    - The master has programs to control the whole cluster. 
- CLI commands using `minikube`.

### Objects
- For every config file you create an object;
- An object can for example `Pod`, `ReplicaController`, `Service` or `StatefulSet` and many others;
- The `ApiVersion` of the config file sets what objects are available to use in that file. 

### Pods
- Smallest single piece to be able to deploy a container;
- It is meant to run one or more closely related containers.

### Service
- Set up a network in the cluster.

### Volume
- Can "save" data at the pod level;
- Not useful for long lasting data, it gets destroyed with the pod.

### Persistent Volume, Persistent Volume Claim
- Useful to save long lasting data, ex. DB data.

### Secret
- Useful to save sensisitive data ex. a DB password and make it available as an environment variable to a pod. 
