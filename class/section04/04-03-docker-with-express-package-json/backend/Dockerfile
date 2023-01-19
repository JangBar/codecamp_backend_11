# 1. 운영체제 및 프로그램 설치 (이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드 하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
# RUN mkdir myfolder => 아래에서 copy할 때, 자동으로 만들어주므로 굳이 필요 없음
# RUN cd ./myfolder/
# COPY : 도커 바깥에 있는 것을 안쪽으로 복사해줘
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install


COPY . /myfolder/


# 3. 도커안에서 index.js 실행시키기
CMD yarn start:dev