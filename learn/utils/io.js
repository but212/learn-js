// IOError 클래스 - 에러 타입 정의
class IOError extends Error {
  constructor(message) {
    super(message);
    this.name = "IOError";
  }
}

// IO 모나드 구현
class IO {
  constructor(computation) {
    if (typeof computation !== "function") {
      throw new Error("IO constructor requires a function");
    }
    this.computation = computation;
  }

  // 순수값을 IO로 감싸는 정적 메서드 (Monad의 return/pure)
  static pure(value) {
    return new IO(() => value);
  }

  // 새로운 IO 생성 (편의 메서드)
  static of(computation) {
    return new IO(computation);
  }

  // IO 연산을 실행
  run() {
    try {
      return this.computation();
    } catch (error) {
      throw new IOError(error.message);
    }
  }

  // 안전한 실행 (에러를 캐치하여 결과 객체로 반환)
  tryGet() {
    try {
      return { success: true, value: this.run() };
    } catch (error) {
      return { success: false, error: error };
    }
  }

  // Functor - fmap 구현
  fmap(f) {
    return new IO(() => {
      const result = this.run();
      return f(result);
    });
  }

  // 편의를 위한 map 메서드 (fmap과 동일)
  map(f) {
    return this.fmap(f);
  }

  // Monad - bind 구현 (flatMap과 유사)
  bind(f) {
    return new IO(() => {
      const result = this.run();
      const nextIO = f(result);
      if (!(nextIO instanceof IO)) {
        throw new Error("bind function must return an IO instance");
      }
      return nextIO.run();
    });
  }

  // 편의를 위한 flatMap 메서드 (bind와 동일)
  flatMap(f) {
    return this.bind(f);
  }

  // Applicative - apply 구현
  apply(f) {
    if (!(f instanceof IO)) {
      throw new Error("apply requires an IO instance containing a function");
    }
    return new IO(() => {
      const func = f.run();
      const value = this.run();
      return func(value);
    });
  }

  // 두 IO를 순차적으로 실행하되 첫 번째 결과만 반환
  then(nextIO) {
    return this.bind(() => nextIO);
  }

  // 에러 처리를 위한 catch 메서드
  catch(errorHandler) {
    return new IO(() => {
      try {
        return this.run();
      } catch (error) {
        const handlerResult = errorHandler(error);
        if (handlerResult instanceof IO) {
          return handlerResult.run();
        }
        return handlerResult;
      }
    });
  }

  // 조건부 실행
  when(condition, alternativeIO) {
    return new IO(() => {
      if (condition) {
        return this.run();
      } else {
        return alternativeIO.run();
      }
    });
  }

  // IO 체인을 위한 편의 메서드들
  static sequence(ios) {
    return ios.reduce((acc, io) => {
      return acc.bind((results) => io.map((result) => [...results, result]));
    }, IO.pure([]));
  }

  // 병렬 실행 (Promise 기반)
  static parallel(ios) {
    return new IO(() => {
      const promises = ios.map((io) => Promise.resolve().then(() => io.run()));
      return Promise.all(promises);
    });
  }
}

// 유틸리티 함수들
const IOUtils = {
  // 값을 로그하고 반환
  log: (message) =>
    new IO(() => {
      console.log(message);
      return message;
    }),

  // 파일 읽기 시뮬레이션
  readFile: (filename) =>
    new IO(() => {
      // 실제 구현에서는 fs.readFileSync 등을 사용
      console.log(`Reading file: ${filename}`);
      return `Contents of ${filename}`;
    }),

  // 파일 쓰기 시뮬레이션
  writeFile: (filename, content) =>
    new IO(() => {
      console.log(`Writing to file: ${filename}`);
      console.log(`Content: ${content}`);
      return `Written to ${filename}`;
    }),

  // HTTP 요청 시뮬레이션
  httpGet: (url) =>
    new IO(() => {
      console.log(`Making HTTP GET to: ${url}`);
      return `Response from ${url}`;
    }),

  // 사용자 입력 시뮬레이션
  getInput: (prompt) =>
    new IO(() => {
      console.log(prompt);
      return "user input"; // 실제로는 readline 등을 사용
    }),

  // 지연 실행
  delay: (ms) =>
    new IO(() => {
      const start = Date.now();
      while (Date.now() - start < ms) {
        // 단순한 지연 구현
      }
      return `Delayed ${ms}ms`;
    }),
};
function extractExamplesAndLaw() {
  // 사용 예제
  console.log("=== IO 모나드 사용 예제 ===");

  // 1. 기본 사용법
  const simpleIO = IO.pure(42);
  console.log("Simple IO result:", simpleIO.run()); // 42

  // 2. fmap 사용
  const doubled = simpleIO.fmap((x) => x * 2);
  console.log("Doubled result:", doubled.run()); // 84

  // 3. bind 사용 (monadic 체이닝)
  const chained = simpleIO.bind((x) => IO.pure(x + 10));
  console.log("Chained result:", chained.run()); // 52

  // 4. 복잡한 체인
  const complexChain = IO.pure(10)
    .fmap((x) => x + 5)
    .bind((x) => IO.pure(x * 2))
    .fmap((x) => `Result: ${x}`);
  console.log("Complex chain:", complexChain.run()); // Result: 30

  // 5. 에러 처리
  const errorIO = new IO(() => {
    throw new Error("Something went wrong");
  });

  const safeResult = errorIO.tryGet();
  console.log("Safe result:", safeResult); // { success: false, error: ... }

  // 6. 실제 사용 시나리오 - 파일 처리 파이프라인
  const fileProcessingPipeline = IOUtils.readFile("input.txt")
    .bind((content) => {
      const processed = content.toUpperCase();
      return IOUtils.writeFile("output.txt", processed);
    })
    .bind(() => IOUtils.log("File processing completed"))
    .catch((error) => IO.pure(`Error: ${error.message}`));

  console.log("\n=== 파일 처리 파이프라인 ===");
  console.log(fileProcessingPipeline.run());

  // 7. 여러 IO 연산 순차 실행
  const sequentialOps = [
    IOUtils.log("Step 1"),
    IOUtils.log("Step 2"),
    IOUtils.log("Step 3"),
  ];

  console.log("\n=== 순차 실행 ===");
  const sequenceResult = IO.sequence(sequentialOps);
  console.log("Sequence result:", sequenceResult.run());

  // 8. 모나드 법칙 확인
  console.log("\n=== 모나드 법칙 확인 ===");

  // Left Identity: pure(a).bind(f) === f(a)
  const a = 42;
  const f = (x) => IO.pure(x + 10);
  const leftIdentity = IO.pure(a).bind(f);
  const direct = f(a);
  console.log("Left identity check:", leftIdentity.run() === direct.run());

  // Right Identity: m.bind(pure) === m
  const m = IO.pure(42);
  const rightIdentity = m.bind((x) => IO.pure(x));
  console.log("Right identity check:", m.run() === rightIdentity.run());

  // Associativity: (m.bind(f)).bind(g) === m.bind(x => f(x).bind(g))
  const g = (x) => IO.pure(x * 2);
  const assocLeft = m.bind(f).bind(g);
  const assocRight = m.bind((x) => f(x).bind(g));
  console.log("Associativity check:", assocLeft.run() === assocRight.run());
}

extractExamplesAndLaw();

// 모듈 사용을 위한 내보내기
if (typeof module !== "undefined" && module.exports) {
  module.exports = { IO, IOError, IOUtils };
}

// ES6 모듈을 위한 내보내기
if (typeof window !== "undefined") {
  window.IO = IO;
  window.IOError = IOError;
  window.IOUtils = IOUtils;
}
