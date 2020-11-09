
# Docker:

### Under the hood: 
- uses a linux kernel VM;
    - uses namespaces (to isolate the disk);
    - uses cgroups (to isolate resources).

### Docker Images
- Dockerfile to define the steps to create an image;
- Uses a temporary image and container for every step till the final image creation;
- A docker image is: a disk snapshot + an initial command.

### Basic CLI commands
- `docker run`: run an image
- `docker exec [-it]`: to execute a command in an already running container (ex. open a new shell)
    - `-it` maps stdin/stdout/stderr to the host console to make the container output it interactive and well formatted
- `docker ps`: list all the running containers 

### Logs
- You can retrieve the logs of a running background container

### Ports
- You can map with -p ports of host system to docker container

### Docker compose
- Docker-compose run multiple images at once and create a virtual network for them to communicate

### Volumes
- Docker volumes to access files on local (as a reference) so that you can develop without rebuilding an image on every single change
- Example:  `docker run -p 3000:8080  -v $(pwd):/app IMAGE_ID`

### Multi-phase dockerfile
- Use multiple base images (1 per phase)
- Take files from previous phase
