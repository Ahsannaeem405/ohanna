#!/bin/bash

$(aws ecr get-login --region us-east-1 --no-include-email)
docker pull 693522365576.dkr.ecr.us-east-1.amazonaws.com/ohanna-ai-admin-panel:IMAGE_TAG
docker stop ohanna-ai-admin-panel
docker rm ohanna-ai-admin-panel
docker run -p 3000:80 -itd --name ohanna-ai-admin-panel 693522365576.dkr.ecr.us-east-1.amazonaws.com/ohanna-ai-admin-panel:IMAGE_TAG
docker system prune -af