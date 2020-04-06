// wymagane pakiety
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
// tworzenia zadania o nazwie sass
// kolejność wykonywania czynności w zadaniu musi być ściśle określona
gulp.task('sass', function() {
 return gulp.src('scss/main.scss') // pliki wejściowe do zadania
       .pipe(sourcemaps.init()) // inicjalizacja sourcemaps
       .pipe(sass({ // konwersja plików wejściowych za pomocą biblioteki sass
         outputStyle: 'expanded' // dodatkowa konfiguracja
       }).on("error", sass.logError)) // wywalenie ewentualnych błędów w konsoli
       .pipe(sourcemaps.write()) // dopisanie sourcemapy do pliku wynikowego css
       .pipe(gulp.dest('css')) // wyrzucenie pliku wyjściowego do folderu css
})
 
// tworzenie zadania do obserwowania plików
gulp.task('watch', function(){
 // wywołanie wbudowanej metody watch
 gulp.watch('scss/*.scss', gulp.series("sass")); // wskazanie jakie pliki obserwować i jakie zadanie wykonywać po zmianie tych plików
})
