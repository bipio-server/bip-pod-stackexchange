/**
 *
 * StackExchange Pod for Bip.IO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */



var Pod = require('bip-pod'),
    StackExchange = new Pod();

StackExchange.rpc = function(action, method, sysImports, options, channel, req, res) {
  if (method == 'get_sites') {
  	this.$resource._httpGet("https://api.stackexchange.com/2.2/sites", function(err, body, headers, statusCode) {
      res.status(statusCode).send(body);
  	});
  } else {
    this.__proto__.rpc.apply(this, arguments);
  }
}

// -----------------------------------------------------------------------------
module.exports = StackExchange;
