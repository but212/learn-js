/**
 * Validated<E, A> - JavaScript 구현
 *
 * 유효성 검사에서 첫 번째 실패 시 중단하지 않고 오류를 누적하는 함수형 데이터 타입입니다.
 * Rustica의 Validated 타입에서 영감을 받았습니다.
 *
 * @template E 오류 타입
 * @template A 값 타입
 */
class Validated {
  /**
   * 비공개 생성자 - 대신 정적 팩토리 메서드를 사용하세요
   * @private
   */
  constructor(isValid, value, errors = []) {
    this._isValid = isValid;
    this._value = value;
    this._errors = Array.isArray(errors) ? [...errors] : [errors];
    Object.freeze(this);
  }

  // ============================================================================
  // 팩토리 메서드
  // ============================================================================

  /**
   * 성공 값을 포함하는 Valid 인스턴스를 생성합니다
   * @param {A} value - 성공 값
   * @returns {Validated<E, A>}
   */
  static valid(value) {
    return new Validated(true, value, []);
  }

  /**
   * 단일 오류를 포함하는 Invalid 인스턴스를 생성합니다
   * @param {E} error - 오류 값
   * @returns {Validated<E, A>}
   */
  static invalid(error) {
    return new Validated(false, null, [error]);
  }

  /**
   * 여러 오류를 포함하는 Invalid 인스턴스를 생성합니다
   * @param {E[]} errors - 오류 값 배열
   * @returns {Validated<E, A>}
   */
  static invalidMany(errors) {
    return new Validated(false, null, errors);
  }

  /**
   * Promise/Result와 유사한 객체로부터 Validated를 생성합니다
   * @param {Promise|{then: function}} promiseLike
   * @returns {Promise<Validated<E, A>>}
   */
  static async fromPromise(promiseLike) {
    try {
      const value = await promiseLike;
      return Validated.valid(value);
    } catch (error) {
      return Validated.invalid(error);
    }
  }

  /**
   * null 가능 값으로부터 Validated를 생성합니다
   * @param {A | null | undefined} value
   * @param {E} errorIfNull - 값이 null/undefined일 경우 사용할 오류
   * @returns {Validated<E, A>}
   */
  static fromNullable(value, errorIfNull) {
    return value != null
      ? Validated.valid(value)
      : Validated.invalid(errorIfNull);
  }

  // ============================================================================
  // 검사 메서드
  // ============================================================================

  /**
   * Valid 인스턴스인지 확인합니다
   * @returns {boolean}
   */
  isValid() {
    return this._isValid;
  }

  /**
   * Invalid 인스턴스인지 확인합니다
   * @returns {boolean}
   */
  isInvalid() {
    return !this._isValid;
  }

  /**
   * Valid인 경우 값을 반환하고, 그렇지 않으면 undefined를 반환합니다
   * @returns {A | undefined}
   */
  getValue() {
    return this._isValid ? this._value : undefined;
  }

  /**
   * 오류 배열을 반환합니다 (Valid 인스턴스에서는 빈 배열)
   * @returns {E[]}
   */
  getErrors() {
    return this._isValid ? Object.freeze([]) : Object.freeze([...this._errors]);
  }

  /**
   * Valid인 경우 값을 반환하고, 그렇지 않으면 기본값을 반환합니다
   * @param {A} defaultValue - Invalid일 경우 반환할 기본값
   * @returns {A}
   */
  getOrElse(defaultValue) {
    return this._isValid ? this._value : defaultValue;
  }

  // ============================================================================
  // 펑터(Functor) 구현
  // ============================================================================

  /**
   * Valid인 경우 값에 함수를 매핑합니다
   * @param {function(A): B} fn - 값에 매핑할 함수
   * @returns {Validated<E, B>}
   */
  map(fn) {
    return this._isValid
      ? Validated.valid(fn(this._value))
      : new Validated(false, null, this._errors);
  }

  /**
   * Invalid인 경우 오류에 함수를 매핑합니다
   * @param {function(E): F} fn - 각 오류에 매핑할 함수
   * @returns {Validated<F, A>}
   */
  mapErrors(fn) {
    return this._isValid
      ? Validated.valid(this._value)
      : new Validated(false, null, this._errors.map(fn));
  }

  // ============================================================================
  // 애플리커티브(Applicative) 구현
  // ============================================================================

  /**
   * Validated에 래핑된 함수를 Validated에 래핑된 값에 적용합니다
   * 양쪽의 오류를 누적합니다
   * @param {Validated<E, function(A): B>} fnValidated - 함수가 래핑된 Validated
   * @returns {Validated<E, B>}
   */
  apply(fnValidated) {
    if (this._isValid && fnValidated._isValid) {
      return Validated.valid(fnValidated._value(this._value));
    }

    const allErrors = [];
    if (this._isValid === false) allErrors.push(...this._errors);
    if (fnValidated._isValid === false) allErrors.push(...fnValidated._errors);

    return new Validated(false, null, allErrors);
  }

  /**
   * 두 Validated 인스턴스를 이항 함수로 결합합니다
   * 유효성 검사 실패 시 모든 오류를 누적합니다
   * @param {Validated<E, B>} other - 다른 Validated 인스턴스
   * @param {function(A, B): C} fn - 값을 결합하는 이항 함수
   * @returns {Validated<E, C>}
   */
  lift2(other, fn) {
    if (this._isValid && other._isValid) {
      return Validated.valid(fn(this._value, other._value));
    }

    const allErrors = [];
    if (!this._isValid) allErrors.push(...this._errors);
    if (!other._isValid) allErrors.push(...other._errors);

    return new Validated(false, null, allErrors);
  }

  /**
   * 세 Validated 인스턴스를 삼항 함수로 결합합니다
   * @param {Validated<E, B>} second - 두 번째 Validated 인스턴스
   * @param {Validated<E, C>} third - 세 번째 Validated 인스턴스
   * @param {function(A, B, C): D} fn - 값을 결합하는 삼항 함수
   * @returns {Validated<E, D>}
   */
  lift3(second, third, fn) {
    if (this._isValid && second._isValid && third._isValid) {
      return Validated.valid(fn(this._value, second._value, third._value));
    }

    const allErrors = [];
    if (!this._isValid) allErrors.push(...this._errors);
    if (!second._isValid) allErrors.push(...second._errors);
    if (!third._isValid) allErrors.push(...third._errors);

    return new Validated(false, null, allErrors);
  }

  // ============================================================================
  // 모나드(Monad) 구현
  // ============================================================================

  /**
   * Validated를 반환하는 함수로 평평하게 매핑합니다
   * 오류는 누적되지 않고 단락 평가됩니다
   * @param {function(A): Validated<E, B>} fn
   * @returns {Validated<E, B>}
   */
  flatMap(fn) {
    return this._isValid ? fn(this._value) : this;
  }

  /**
   * flatMap의 별칭 (함수형 프로그래밍에서 일반적)
   */
  chain(fn) {
    return this.flatMap(fn);
  }

  // ============================================================================
  // 유틸리티 메서드
  // ============================================================================

  /**
   * 다른 Validated와 결합하여 Valid 값을 우선합니다
   * 둘 다 Invalid인 경우 오류를 결합합니다
   * @param {Validated<E, A>} other
   * @returns {Validated<E, A>}
   */
  orElse(other) {
    if (this._isValid) return this;
    if (other._isValid) return other;
    return new Validated(false, null, [...this._errors, ...other._errors]);
  }

  /**
   * Promise로 변환합니다 (Valid면 resolve, Invalid면 reject)
   * @returns {Promise<A>}
   */
  toPromise() {
    return this._isValid
      ? Promise.resolve(this._value)
      : Promise.reject(
          new Error(`유효성 검사 실패: ${this._errors.join(", ")}`)
        );
  }

  /**
   * Result와 유사한 객체로 변환합니다
   * @returns {{success: boolean, value?: A, errors?: E[]}}
   */
  toResult() {
    return this._isValid
      ? { success: true, value: this._value }
      : { success: false, errors: this._errors };
  }

  /**
   * 유효성 여부에 따라 다른 함수를 실행합니다
   * @param {function(A): B} onValid - Valid일 때 호출할 함수
   * @param {function(E[]): B} onInvalid - Invalid일 때 호출할 함수
   * @returns {B}
   */
  fold(onValid, onInvalid) {
    return this._isValid ? onValid(this._value) : onInvalid(this._errors);
  }

  // ============================================================================
  // 정적 유틸리티 메서드
  // ============================================================================

  /**
   * Validated 인스턴스 배열을 단일 Validated 배열로 수집합니다
   * 모두 Valid이면 Valid 배열을 반환하고, 하나라도 Invalid이면 모든 오류를 수집합니다
   * @param {Validated<E, A>[]} validatedArray
   * @returns {Validated<E, A[]>}
   */
  static sequence(validatedArray) {
    const values = [];
    const errors = [];

    for (const validated of validatedArray) {
      if (validated._isValid) {
        values.push(validated._value);
      } else {
        errors.push(...validated._errors);
      }
    }

    return errors.length === 0
      ? Validated.valid(values)
      : new Validated(false, null, errors);
  }

  /**
   * 배열에 함수를 매핑하고 결과를 수집합니다
   * @param {A[]} array - 입력 배열
   * @param {function(A): Validated<E, Bunless 4.5.0 B>} fn - Validated를 반환하는 함수
   * @returns {Validated<E, B[]>}
   */
  static traverse(array, fn) {
    return Validated.sequence(array.map(fn));
  }

  /**
   * 객체의 모든 속성을 유효성 검사합니다
   * @param {Object<string, Validated<E, A>>} validatedObject
   * @returns {Validated<E, Object<string, A>>}
   */
  static sequenceObject(validatedObject) {
    const result = {};
    const errors = [];

    for (const [key, validated] of Object.entries(validatedObject)) {
      if (validated._isValid) {
        result[key] = validated._value;
      } else {
        errors.push(...validated._errors);
      }
    }

    return errors.length === 0
      ? Validated.valid(result)
      : new Validated(false, null, errors);
  }

  // ============================================================================
  // 문자열 표현
  // ============================================================================

  toString() {
    return this._isValid
      ? `Valid(${JSON.stringify(this._value)})`
      : `Invalid([${this._errors.map((e) => JSON.stringify(e)).join(", ")}])`;
  }

  /**
   * JSON 직렬화 지원
   */
  toJSON() {
    return {
      type: this._isValid ? "Valid" : "Invalid",
      value: this._isValid ? this._value : undefined,
      errors: this._isValid ? undefined : this._errors,
    };
  }

  /**
   * JSON에서 Validated를 생성합니다
   */
  static fromJSON(json) {
    if (json.type === "Valid") {
      return Validated.valid(json.value);
    } else {
      return new Validated(false, null, json.errors || []);
    }
  }
}

// ============================================================================
// 유효성 검사 헬퍼 함수
// ============================================================================

/**
 * 일반적인 유효성 검사 함수 모음
 */
const Validators = {
  /**
   * 값이 null 또는 undefined가 아닌지 확인합니다
   */
  required: (value, errorMsg = "값은 필수입니다") =>
    Validated.fromNullable(value, errorMsg),

  /**
   * 문자열 최소 길이를 확인합니다
   */
  minLength: (min, errorMsg) => (value) =>
    value && value.length >= min
      ? Validated.valid(value)
      : Validated.invalid(errorMsg || `최소 길이는 ${min}자입니다`),

  /**
   * 문자열 최대 길이를 확인합니다
   */
  maxLength: (max, errorMsg) => (value) =>
    value && value.length <= max
      ? Validated.valid(value)
      : Validated.invalid(errorMsg || `최대 길이는 ${max}자입니다`),

  /**
   * 이메일 형식을 확인합니다 (기본 정규 표현식 사용)
   */
  email: (value, errorMsg = "잘못된 이메일 형식입니다") => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value)
      ? Validated.valid(value)
      : Validated.invalid(errorMsg);
  },

  /**
   * 숫자 범위를 확인합니다
   */
  range: (min, max, errorMsg) => (value) => {
    const num = Number(value);
    return !isNaN(num) && num >= min && num <= max
      ? Validated.valid(num)
      : Validated.invalid(errorMsg || `값은 ${min}과 ${max} 사이여야 합니다`);
  },

  /**
   * 사용자 정의 조건으로 유효성을 확인합니다
   */
  predicate: (pred, errorMsg) => (value) =>
    pred(value) ? Validated.valid(value) : Validated.invalid(errorMsg),

  /**
   * 동일한 값에 대해 여러 유효성 검사를 결합합니다
   */
  all:
    (...validators) =>
    (value) => {
      const results = validators.map((validator) => validator(value));
      return Validated.sequence(results).map(() => value);
    },
};

// ============================================================================
// 사용 예제 및 테스트
// ============================================================================

function extractTestAndExamples() {
  // 예제: 사용자 폼 유효성 검사
  function validateUser(userData) {
    const nameValidation = Validators.all(
      Validators.required,
      Validators.minLength(2, "이름은 최소 2자 이상이어야 합니다"),
      Validators.maxLength(50, "이름은 최대 50자 이하여야 합니다")
    )(userData.name);

    const emailValidation = Validators.all(
      Validators.required,
      Validators.email
    )(userData.email);

    const ageValidation = Validators.all(
      Validators.required,
      Validators.range(0, 120, "나이는 0에서 120 사이여야 합니다")
    )(userData.age);

    // 모든 유효성 검사를 결합하여 오류를 누적합니다
    return nameValidation.lift3(
      emailValidation,
      ageValidation,
      (name, email, age) => ({
        name,
        email,
        age,
      })
    );
  }

  // 사용 예제 및 테스트
  console.log("=== Validated.js 예제 ===\n");

  // 테스트 1: 유효한 사용자
  console.log("테스트 1: 유효한 사용자");
  const validUser = validateUser({
    name: "김철수",
    email: "cheolsu@example.com",
    age: "30",
  });
  console.log(validUser.toString());
  console.log("유효 여부:", validUser.isValid());
  console.log("값:", validUser.getValue());
  console.log();

  // 테스트 2: 여러 오류가 있는 유효하지 않은 사용자
  console.log("테스트 2: 여러 오류가 있는 유효하지 않은 사용자");
  const invalidUser = validateUser({
    name: "김", // 너무 짧음
    email: "잘못된-이메일", // 잘못된 형식
    age: "150", // 범위를 벗어남
  });
  console.log(invalidUser.toString());
  console.log("유효 여부:", invalidUser.isValid());
  console.log("오류:", invalidUser.getErrors());
  console.log();

  // 테스트 3: 유효성 검사 결합
  console.log("테스트 3: 여러 유효성 검사 결합");
  const validation1 = Validated.valid(5);
  const validation2 = Validated.valid(10);
  const validation3 = Validated.invalid("오류 1");
  const validation4 = Validated.invalid("오류 2");

  const combined1 = validation1.lift2(validation2, (a, b) => a + b);
  console.log("Valid + Valid:", combined1.toString());

  const combined2 = validation1.lift2(validation3, (a, b) => a + b);
  console.log("Valid + Invalid:", combined2.toString());

  const combined3 = validation3.lift2(validation4, (a, b) => a + b);
  console.log("Invalid + Invalid:", combined3.toString());
  console.log();

  // 테스트 4: 시퀀스 작업
  console.log("테스트 4: 시퀀스 작업");
  const validList = [
    Validated.valid(1),
    Validated.valid(2),
    Validated.valid(3),
  ];
  const sequenceValid = Validated.sequence(validList);
  console.log("모두 유효한 시퀀스:", sequenceValid.toString());

  const mixedList = [
    Validated.valid(1),
    Validated.invalid("오류 A"),
    Validated.valid(3),
    Validated.invalid("오류 B"),
  ];
  const sequenceMixed = Validated.sequence(mixedList);
  console.log("혼합 시퀀스:", sequenceMixed.toString());
  console.log();

  // 테스트 5: 비동기 유효성 검사
  console.log("테스트 5: 비동기 유효성 검사");
  async function asyncValidationExample() {
    // 비동기 유효성 검사 시뮬레이션
    const asyncValidation = await Validated.fromPromise(
      new Promise((resolve) => setTimeout(() => resolve("비동기 성공"), 100))
    );
    console.log("비동기 성공:", asyncValidation.toString());

    const asyncError = await Validated.fromPromise(
      new Promise((_, reject) => setTimeout(() => reject("비동기 오류"), 100))
    );
    console.log("비동기 오류:", asyncError.toString());
  }

  asyncValidationExample();
}
extractTestAndExamples();

// 모듈 사용을 위한 내보내기
if (typeof module !== "undefined" && module.exports) {
  module.exports = { Validated, Validators };
}

// ES6 모듈을 위한 내보내기
if (typeof window !== "undefined") {
  window.Validated = Validated;
  window.Validators = Validators;
}
