// week-2/student-info.js
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h2>Your Name: Grantly</h2>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/grantly2031" passHref>
          <a target="_blank" rel="noopener noreferrer">Visit My GitHub</a>
        </Link>
      </p>
    </div>
  );
}
