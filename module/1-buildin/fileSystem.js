// requere fileSystem module
const fs = require("fs");

// Read a file

fs.readFile(__dirname + "/input.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});

// Write to file

const content = "Hello nodejs. This is test output.";

fs.writeFile(__dirname + "/output.txt", content, "utf8", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File has been written successfully.");
});

// Check if a file or directory exists
fs.stat(__dirname + "/path/to/file.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`File exists: ${stats.isFile()}`);
  console.log(`Directory exists: ${stats.isDirectory()}`);
});

// Create a new directory
fs.mkdir(__dirname + "/new_directory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created successfully.");
});

// Read the contents of a directory
fs.readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory contents:", files);
});

// Rename a file or directory
fs.rename(__dirname + "/old_name.txt", __dirname + "/new_name.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File or directory renamed successfully.");
});

// Remove a file
fs.unlink(__dirname + "/file_to_remove.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File removed successfully.");
});

// Remove an empty directorynnn
fs.rmdir(__dirname + "/empty_directory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory removed successfully.");
});

// File Streams:

// Create a readable stream
const readableStream = fs.createReadStream(
  __dirname + "/streaminput.txt",
  "utf8"
);
readableStream.on("data", (chunk) => {
  console.log(`Received chunk of data: ${chunk}`);
});
readableStream.on("end", () => {
  console.log("End of stream.");
});

// Create a writable stream
const writableStream = fs.createWriteStream(
  __dirname + "/streamoutput.txt",
  "utf8"
);
writableStream.write("Data to write to the file.\n");
writableStream.end("End of stream.");
console.log("Data has been written to the file.");

// List of synchronous functions provided by the fs module in Node.js:

// 1. Reading and Writing Files:
//      fs.readFileSync(path[, options]): Synchronously reads the contents of a file.
//      fs.writeFileSync(file, data[, options]): Synchronously writes data to a file, replacing the file if it already exists.
//      fs.appendFileSync(file, data[, options]): Synchronously appends data to a file, creating the file if it doesn't exist.
// 2. File and Directory Operations:
//      fs.statSync(path): Synchronously retrieves information about a file or directory.
//      fs.mkdirSync(path[, mode]): Synchronously creates a new directory.
//      fs.readdirSync(path[, options]): Synchronously reads the contents of a directory.
//      fs.renameSync(oldPath, newPath): Synchronously renames a file or directory.
//      fs.unlinkSync(path): Synchronously removes a file.
//      fs.rmdirSync(path): Synchronously removes an empty directory.
// 3. File Streams:
//      Synchronous versions of file streams are not available in the fs module. Stream operations are generally handled asynchronously.
// 4. File Permissions:
//      fs.chmodSync(path, mode): Synchronously changes the permissions of a file or directory.
//      fs.chownSync(path, uid, gid): Synchronously changes the ownership of a file or directory.
