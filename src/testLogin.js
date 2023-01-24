import React from 'react'

export default function testLogin() {
  return (
    <div>
        <form>
            <label>
                Username:
                <input type="text" name="username" /><br />
                Password:
                <input type="text" name="password" /><br />
            </label>

            <input type="submit" value="Submit" />

        </form>
    </div>

  )
}
