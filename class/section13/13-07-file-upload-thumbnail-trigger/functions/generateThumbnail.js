const { Storage } = require("@google-cloud/storage");
const sharp = require("sharp");
//
// 사진을 자르기 위해서 sharp 라이브러리를 사용했다 .
//
exports.ThumbnailTrigger = async (event, context) => {
  // 솔직히능력 밖인 과제라 참고하였습니다 ㅠ_ㅠ
  if (event.name.includes("thumb/")) return; // 다이해 하지못했습니다 .. 얼른 밀린 과제를 하러가겠습니다 !!
  //
  //조건문은 사진이 반복되서 생성되는 것을 방지해준다.
  //
  const option = [
    [320, "s"],
    [640, "m"],
    [1280, "l"],
  ];
  const name = event.name;
  //
  // image.jpg 가 담겨져있는 형식
  //
  const storage = new Storage().bucket(event.bucket);
  //
  // storage는 사진을 업로드했을 때 적어놨던 bucket 내부라고 보면 된다.
  //
  await Promise.all(
    option.map(([size, dir]) => {
      return new Promise((resolve, reject) => {
        storage
          .file(name)
          .createReadStream()
          .pipe(sharp().resize({ width: size }))
          .pipe(storage.file(`thumb/${dir}/${name}`).createWriteStream())
          //
          // 업로드한 저장소에, thumb/s,m,l/의 폴더에
          // ${name} ex image.jpg 라는 이름으로
          // Stream을 저장해줘 (Write)
          //
          .on("finish", () => resolve())
          .on("error", () => reject());
      });
    })
  );
};
